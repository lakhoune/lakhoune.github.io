import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-wg-planner',
    imports: [CommonModule, FormsModule],
    templateUrl: './wg-planner.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./wg-planner.component.scss']
})
export class WgPlannerComponent implements OnInit {
  year = 2026;
  // support N persons instead of just A/B
  persons: string[] = ['Person A', 'Person B'];
  choreName = '';
  choreFreq = 52;
  choreEffort = 2;
  choreRoom = '';
  chores: Array<any> = [];
  nextId = 1;
  activeTemplate: string | null = null;
  showPlan = false;
  private readonly localStorageKey = 'wg-planner-draft';
  readonly ROOM_OPTIONS = ['General', 'Kitchen', 'Bathroom', 'Living room', 'Bedroom', 'Laundry', 'Outdoor'];
  readonly DEFAULT_ROOM = 'General';

  FREQ_LABELS: any = {
    365: 'Daily',
    156: '3×/week',
    104: '2×/week',
    52: 'Weekly',
    26: 'Every 2 wks',
    12: 'Monthly',
    6: 'Every 2 mo',
    4: 'Quarterly',
    2: 'Every 6 mo',
    1: 'Yearly'
  };

  EFFORT_LABELS: any = { 1: 'Low', 2: 'Medium', 3: 'High' };

  MONTH_NAMES = [
    'January','February','March','April','May','June','July','August','September','October','November','December'
  ];

  TEMPLATES: any = {
    wg: {
      label: 'Shared Flat (WG)',
      desc: 'Shared spaces only — no personal chores like laundry',
      chores: [
        { name: 'Vacuum common areas', freq: 52, effort: 2, room: 'Living room' },
        { name: 'Mop floors', freq: 26, effort: 2, room: 'Living room' },
        { name: 'Clean bathroom', freq: 52, effort: 3, room: 'Bathroom' },
        { name: 'Scrub kitchen', freq: 52, effort: 2, room: 'Kitchen' },
        { name: 'Wipe down surfaces', freq: 52, effort: 1, room: 'Living room' },
        { name: 'Take out trash', freq: 52, effort: 1, room: 'General' },
        { name: 'Grocery run', freq: 52, effort: 2, room: 'General' },
        { name: 'Descale bathroom', freq: 12, effort: 2, room: 'Bathroom' },
        { name: 'Clean oven', freq: 4, effort: 3, room: 'Kitchen' },
        { name: 'Window cleaning', freq: 4, effort: 3, room: 'General' }
      ]
    },
    couple: {
      label: 'Couple',
      desc: 'Full household including laundry, ironing & cooking',
      chores: [
        { name: 'Vacuum', freq: 52, effort: 2, room: 'Living room' },
        { name: 'Mop floors', freq: 26, effort: 2, room: 'Living room' },
        { name: 'Clean bathroom', freq: 12, effort: 3, room: 'Bathroom' },
        { name: 'Scrub kitchen', freq: 52, effort: 2, room: 'Kitchen' },
        { name: 'Wipe down surfaces', freq: 52, effort: 1, room: 'Living room' },
        { name: 'Take out trash', freq: 52, effort: 1, room: 'General' },
        { name: 'Grocery run', freq: 52, effort: 2, room: 'General' },
        { name: 'Do laundry', freq: 52, effort: 2, room: 'Laundry' },
        { name: 'Ironing', freq: 26, effort: 2, room: 'Laundry' },
        { name: 'Cook dinner', freq: 156, effort: 2, room: 'Kitchen' },
        { name: 'Clean oven', freq: 4, effort: 3, room: 'Kitchen' },
        { name: 'Window cleaning', freq: 4, effort: 3, room: 'General' }
      ]
    },
    house: {
      label: 'House & Garden',
      desc: 'Indoor chores plus lawn, garden & seasonal outdoor tasks',
      chores: [
        { name: 'Vacuum', freq: 52, effort: 2, room: 'Living room' },
        { name: 'Mop floors', freq: 26, effort: 2, room: 'Living room' },
        { name: 'Clean bathroom', freq: 12, effort: 3, room: 'Bathroom' },
        { name: 'Scrub kitchen', freq: 52, effort: 2, room: 'Kitchen' },
        { name: 'Take out trash', freq: 52, effort: 1, room: 'General' },
        { name: 'Grocery run', freq: 52, effort: 2, room: 'General' },
        { name: 'Mow lawn', freq: 26, effort: 2, room: 'Outdoor' },
        { name: 'Garden maintenance', freq: 12, effort: 3, room: 'Outdoor' },
        { name: 'Rake leaves / snow', freq: 4, effort: 2, room: 'Outdoor' },
        { name: 'Clean oven', freq: 4, effort: 3, room: 'Kitchen' },
        { name: 'Window cleaning', freq: 4, effort: 3, room: 'General' },
        { name: 'Gutter clearing', freq: 2, effort: 3, room: 'Outdoor' }
      ]
    },
    minimal: {
      label: 'Minimal',
      desc: 'Bare essentials — just enough to keep things tidy',
      chores: [
        { name: 'Vacuum', freq: 52, effort: 2, room: 'Living room' },
        { name: 'Clean bathroom', freq: 26, effort: 3, room: 'Bathroom' },
        { name: 'Scrub kitchen', freq: 26, effort: 2, room: 'Kitchen' },
        { name: 'Take out trash', freq: 52, effort: 1, room: 'General' },
        { name: 'Window cleaning', freq: 2, effort: 3, room: 'General' }
      ]
    }
  };

  // Computed plan state
  planTitle = '';
  totals: number[] = [];
  total = 0;
  months: any[] = [];

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.promptRestoreDraft();
  }

  templateKeys() {
    return Object.keys(this.TEMPLATES);
  }

  get choreGroups() {
    const groups = new Map<string, any[]>();
    for (const chore of this.chores) {
      const room = chore.room || this.DEFAULT_ROOM;
      if (!groups.has(room)) groups.set(room, []);
      groups.get(room)!.push(chore);
    }

    const ordered = this.ROOM_OPTIONS.filter(r => groups.has(r)).map(room => ({
      room,
      chores: groups.get(room) || []
    }));
    for (const [room, chores] of groups) {
      if (!this.ROOM_OPTIONS.includes(room)) ordered.push({ room, chores });
    }
    return ordered;
  }

  get chorePts(): number {
    return this.chores.reduce((sum, c) => sum + (c.freq || 0) * (c.effort || 0), 0);
  }

  get choreCountLabel(): string {
    return this.chores.length ? `${this.chores.length} chore${this.chores.length !== 1 ? 's' : ''} · ${this.chorePts} pts/yr` : '';
  }

  esc(s: any) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  addChore() {
    const name = (this.choreName || '').trim();
    if (!name) return;
    this.chores.push({
      id: this.nextId++,
      name,
      freq: +this.choreFreq,
      effort: +this.choreEffort,
      room: this.choreRoom || this.DEFAULT_ROOM
    });
    this.choreName = '';
    this.choreRoom = '';
    this.saveDraft();
  }

  addPerson(name?: string) {
    const n = (name || '').trim();
    this.persons.push(n || `Person ${this.persons.length + 1}`);
    this.saveDraft();
  }

  removePerson(idx: number) {
    if (this.persons.length <= 1) return;
    this.persons.splice(idx, 1);
    this.saveDraft();
  }

  removeChore(id: number) {
    this.chores = this.chores.filter((c) => c.id !== id);
    this.activeTemplate = null;
    this.saveDraft();
  }

  loadTemplate(key: string) {
    const tpl = this.TEMPLATES[key];
    if (!tpl) return;
    this.chores = tpl.chores.map((c: any) => ({ ...c, id: this.nextId++, room: c.room || this.DEFAULT_ROOM }));
    this.activeTemplate = key;
    this.saveDraft();
  }

  weekStartDate(year: number, w: number) {
    const jan4 = new Date(year, 0, 4);
    const dow = jan4.getDay();
    const toMon = dow === 0 ? 6 : dow - 1;
    const week1Mon = new Date(year, 0, 4 - toMon);
    return new Date(week1Mon.getTime() + (w - 1) * 7 * 86400000);
  }

  weekDates(year: number, w: number) {
    const SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const s = this.weekStartDate(year, w);
    const e = new Date(s.getTime() + 6 * 86400000);
    return s.getMonth() === e.getMonth()
      ? `${SHORT[s.getMonth()]} ${s.getDate()}–${e.getDate()}`
      : `${SHORT[s.getMonth()]} ${s.getDate()} – ${SHORT[e.getMonth()]} ${e.getDate()}`;
  }

  generatePlan() {
    if (!this.chores.length) return alert('Add at least one chore first.');
    const year = +this.year || 2026;
    const names = this.persons.map(p => (p || '').trim() || 'Unnamed');

    const byWeek: any[] = Array.from({ length: 53 }, () => []);
    for (const chore of this.chores) {
      if (chore.freq >= 52) {
        const count = Math.ceil(chore.freq / 52);
        for (let w = 1; w <= 52; w++) byWeek[w].push({ chore, count });
      } else {
        const interval = 52 / chore.freq;
        for (let i = 0; i < chore.freq; i++) {
          const w = Math.min(52, Math.max(1, Math.round(interval * (i + 0.5))));
          byWeek[w].push({ chore, count: 1 });
        }
      }
    }

    // prepare lastDone and totals for N persons
    const lastDone = new Map<string, number>();
    this.totals = Array.from({ length: names.length }, () => 0);
    this.chores.forEach((c, i) => {
      for (let p = 0; p < names.length; p++) lastDone.set(`${p}-${c.id}`, p % 2 === 0 ? -99 : 0);
    });

    const schedule: any = {};

    for (let w = 1; w <= 52; w++) {
      const occs = (byWeek[w] || []).slice().sort((a: any, b: any) => b.chore.effort * b.count - a.chore.effort * a.count);
      const weekSlots: any[] = Array.from({ length: names.length }, () => []);
      for (const occ of occs) {
        const id = occ.chore.id;
        const delta = occ.chore.effort * occ.count;

        // choose person with smallest total; tie-break using lastDone
        let best = 0;
        for (let p = 1; p < names.length; p++) {
          if ((this.totals[p] || 0) < (this.totals[best] || 0)) best = p;
          else if ((this.totals[p] || 0) === (this.totals[best] || 0)) {
            const lastBest = lastDone.get(`${best}-${id}`) || 0;
            const lastP = lastDone.get(`${p}-${id}`) || 0;
            if (lastP < lastBest) best = p;
          }
        }

        lastDone.set(`${best}-${id}`, w);
        weekSlots[best].push(occ);
        this.totals[best] += delta;
      }

      const mapping: any = {};
      const weekTotals: any = {};
      for (let p = 0; p < names.length; p++) {
        mapping[names[p]] = weekSlots[p];
        weekTotals[names[p]] = weekSlots[p].reduce((sum: number, occ: any) => sum + (occ.chore.effort || 0) * occ.count, 0);
      }
      mapping.totals = weekTotals;
      schedule[w] = mapping;
    }

    function weekToMonth(yearLocal: number, week: number, weekStartDateFn: any) {
      const thu = new Date(weekStartDateFn(yearLocal, week).getTime() + 3 * 86400000);
      return thu.getMonth();
    }

    const monthWeeks: number[][] = Array.from({ length: 12 }, () => []);
    for (let w = 1; w <= 52; w++) monthWeeks[weekToMonth(year, w, this.weekStartDate.bind(this))].push(w);

    this.total = this.totals.reduce((s, v) => s + v, 0);
    this.planTitle = `${names.join(' & ')} — Chore Plan ${year}`;

    this.months = monthWeeks.map((weeks, m) => {
      if (!weeks.length) return null;
      const weeksArr = weeks.map(w => {
        const s = schedule[w] || {};
        return {
          num: w,
          dates: this.weekDates(year, w),
          // keep mapping by person name so template can read w[person]
          ...s
        };
      });
      return { name: this.MONTH_NAMES[m], weeks: weeksArr };
    }).filter(Boolean) as any[];

    this.showPlan = true;
    setTimeout(() => window.scrollTo(0,0), 0);
  }

  exportCsv() {
    if (!this.chores.length) {
      return alert('Add at least one chore first.');
    }

    const lines: string[] = [];
    lines.push(`#year,${this.year}`);
    for (const person of this.persons) {
      lines.push(`#person,${this.escapeCsv(person)}`);
    }
    lines.push('name,freq,effort,room');
    for (const chore of this.chores) {
      lines.push([
        this.escapeCsv(chore.name),
        chore.freq,
        chore.effort,
        this.escapeCsv(chore.room || this.DEFAULT_ROOM)
      ].join(','));
    }

    const csv = lines.join('\n');
    const filename = `chore-plan-${this.year || new Date().getFullYear()}.csv`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  importCsvFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      try {
        this.loadFromCsv(text);
      } catch (error: any) {
        alert('Unable to import CSV: ' + (error?.message || error));
      }
    };
    reader.readAsText(file, 'utf-8');
    input.value = '';
  }

  private loadFromCsv(content: string) {
    const rows = content.replace(/\r\n/g, '\n').split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const persons: string[] = [];
    const chores: any[] = [];
    let year = this.year;
    let headerParsed = false;

    for (const line of rows) {
      if (line.startsWith('#')) {
        const [key, ...vals] = this.parseCsvLine(line.substring(1));
        const value = vals.join(',').trim();
        if (key.toLowerCase() === 'year') {
          const parsedYear = Number(value);
          if (!Number.isFinite(parsedYear) || parsedYear <= 0) {
            throw new Error('Invalid year in CSV.');
          }
          year = parsedYear;
        } else if (key.toLowerCase() === 'person') {
          if (value) persons.push(value);
        }
        continue;
      }

      const cells = this.parseCsvLine(line);
      if (!headerParsed) {
        const normalized = cells.map(cell => cell.trim().toLowerCase());
        if (normalized[0] !== 'name' || normalized[1] !== 'freq' || normalized[2] !== 'effort') {
          throw new Error('CSV header must be: name,freq,effort[,room]');
        }
        headerParsed = true;
        continue;
      }

      const name = cells[0].trim();
      const freq = Number(cells[1]);
      const effort = Number(cells[2]);
      const room = cells.length >= 4 ? cells[3].trim() || this.DEFAULT_ROOM : this.DEFAULT_ROOM;
      if (!name || !Number.isFinite(freq) || !Number.isFinite(effort)) {
        continue;
      }
      chores.push({ id: this.nextId++, name, freq, effort, room });
    }

    if (!headerParsed) {
      throw new Error('CSV file missing header row.');
    }
    if (!chores.length) {
      throw new Error('CSV file contains no chores.');
    }
    this.persons = persons.length ? persons : this.persons;
    this.year = year;
    this.chores = chores;
    this.activeTemplate = null;
    this.showPlan = false;
    this.totals = [];
    this.total = 0;
    this.saveDraft();
  }

  private escapeCsv(value: string) {
    const text = String(value ?? '');
    if (/[,"\n]/.test(text)) {
      return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
  }

  private parseCsvLine(line: string) {
    const cells: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (inQuotes) {
        if (char === '"') {
          if (line[i + 1] === '"') {
            current += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          current += char;
        }
      } else if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        cells.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    cells.push(current);
    return cells;
  }

  saveDraft() {
    try {
      const draft = {
        year: this.year,
        persons: this.persons,
        chores: this.chores,
      };
      localStorage.setItem(this.localStorageKey, JSON.stringify(draft));
    } catch {
      // ignore storage failures silently
    }
  }

  private loadDraft() {
    try {
      const raw = localStorage.getItem(this.localStorageKey);
      if (!raw) return null;
      const draft = JSON.parse(raw);
      if (!draft || !Array.isArray(draft.persons) || !Array.isArray(draft.chores)) return null;
      return draft;
    } catch {
      return null;
    }
  }

  private promptRestoreDraft() {
    const draft = this.loadDraft();
    if (!draft) return;

    const snack = this._snackBar.open('Restore last chore plan draft?', 'Restore', { duration: 5000 });
    snack.onAction().subscribe(() => {
      this.restoreDraft(draft);
      this._snackBar.open('Draft restored', undefined, { duration: 2500 });
    });
  }

  private restoreDraft(draft: any) {
    this.year = draft.year || this.year;
    this.persons = Array.isArray(draft.persons) && draft.persons.length ? draft.persons : this.persons;
    this.chores = Array.isArray(draft.chores) ? draft.chores.map((c: any) => ({ ...c, id: c.id ?? this.nextId++ })) : this.chores;
    const maxId = this.chores.length ? Math.max(this.nextId, ...this.chores.map((c: any) => c.id || 0)) : this.nextId;
    this.nextId = maxId + 1;
    this.activeTemplate = null;
    this.showPlan = false;
    this.totals = [];
    this.total = 0;
  }

  weekIsFree(w: any) {
    return this.persons && this.persons.length && this.persons.every(p => !(w[p] || []).length);
  }

  goBack() {
    this.showPlan = false;
  }

  print() { window.print(); }
}
