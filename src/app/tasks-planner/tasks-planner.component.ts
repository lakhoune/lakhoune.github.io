import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-planner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-planner.component.html',
  styleUrls: ['./tasks-planner.component.scss']
})
export class TasksPlannerComponent {
  year = 2026;
  // dynamic persons list (supports more than two)
  persons: string[] = ['Person A', 'Person B'];
  choreName = '';
  choreFreq = 52;
  choreEffort = 2;
  chores: Array<any> = [];
  nextId = 1;
  activeTemplate: string | null = null;
  showPlan = false;

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
      desc: 'Shared spaces only — no personal tasks like laundry',
      chores: [
        { name: 'Vacuum common areas', freq: 52, effort: 2 },
        { name: 'Mop floors', freq: 26, effort: 2 },
        { name: 'Clean bathroom', freq: 52, effort: 3 },
        { name: 'Scrub kitchen', freq: 52, effort: 2 },
        { name: 'Wipe down surfaces', freq: 52, effort: 1 },
        { name: 'Take out trash', freq: 52, effort: 1 },
        { name: 'Grocery run', freq: 52, effort: 2 },
        { name: 'Descale bathroom', freq: 12, effort: 2 },
        { name: 'Clean oven', freq: 4, effort: 3 },
        { name: 'Window cleaning', freq: 4, effort: 3 }
      ]
    },
    couple: {
      label: 'Couple',
      desc: 'Full household including laundry, ironing & cooking',
      chores: [
        { name: 'Vacuum', freq: 52, effort: 2 },
        { name: 'Mop floors', freq: 26, effort: 2 },
        { name: 'Clean bathroom', freq: 12, effort: 3 },
        { name: 'Scrub kitchen', freq: 52, effort: 2 },
        { name: 'Wipe down surfaces', freq: 52, effort: 1 },
        { name: 'Take out trash', freq: 52, effort: 1 },
        { name: 'Grocery run', freq: 52, effort: 2 },
        { name: 'Do laundry', freq: 52, effort: 2 },
        { name: 'Ironing', freq: 26, effort: 2 },
        { name: 'Cook dinner', freq: 156, effort: 2 },
        { name: 'Clean oven', freq: 4, effort: 3 },
        { name: 'Window cleaning', freq: 4, effort: 3 }
      ]
    },
    house: {
      label: 'House & Garden',
      desc: 'Indoor tasks plus lawn, garden & seasonal outdoor tasks',
      chores: [
        { name: 'Vacuum', freq: 52, effort: 2 },
        { name: 'Mop floors', freq: 26, effort: 2 },
        { name: 'Clean bathroom', freq: 12, effort: 3 },
        { name: 'Scrub kitchen', freq: 52, effort: 2 },
        { name: 'Take out trash', freq: 52, effort: 1 },
        { name: 'Grocery run', freq: 52, effort: 2 },
        { name: 'Mow lawn', freq: 26, effort: 2 },
        { name: 'Garden maintenance', freq: 12, effort: 3 },
        { name: 'Rake leaves / snow', freq: 4, effort: 2 },
        { name: 'Clean oven', freq: 4, effort: 3 },
        { name: 'Window cleaning', freq: 4, effort: 3 },
        { name: 'Gutter clearing', freq: 2, effort: 3 }
      ]
    },
    minimal: {
      label: 'Minimal',
      desc: 'Bare essentials — just enough to keep things tidy',
      chores: [
        { name: 'Vacuum', freq: 52, effort: 2 },
        { name: 'Clean bathroom', freq: 26, effort: 3 },
        { name: 'Scrub kitchen', freq: 26, effort: 2 },
        { name: 'Take out trash', freq: 52, effort: 1 },
        { name: 'Window cleaning', freq: 2, effort: 3 }
      ]
    }
  };

  // Computed plan state
  planTitle = '';
  totals: number[] = [];
  total = 0;
  months: any[] = [];

  templateKeys() {
    return Object.keys(this.TEMPLATES);
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
    this.chores.push({ id: this.nextId++, name, freq: +this.choreFreq, effort: +this.choreEffort });
    this.choreName = '';
  }

  addPerson(name?: string) {
    const n = (name || '').trim();
    const val = n || `Person ${this.persons.length + 1}`;
    this.persons.push(val);
  }

  removePerson(index: number) {
    if (this.persons.length <= 1) return;
    this.persons.splice(index, 1);
  }

  removeChore(id: number) {
    this.chores = this.chores.filter((c) => c.id !== id);
    this.activeTemplate = null;
  }

  loadTemplate(key: string) {
    const tpl = this.TEMPLATES[key];
    if (!tpl) return;
    this.chores = tpl.chores.map((c: any) => ({ ...c, id: this.nextId++ }));
    this.activeTemplate = key;
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
    // initialize totals per person
    this.totals = Array.from({ length: names.length }, () => 0);

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
    const lastDone = new Map<string, number>();
    // seed lastDone so assignment rotates
    this.chores.forEach((c, i) => {
      for (let p = 0; p < names.length; p++) lastDone.set(`${p}-${c.id}`, p % 2 === 0 ? -99 : 0);
    });

    const schedule: any = {};

    for (let w = 1; w <= 52; w++) {
      const occs = (byWeek[w] || []).slice().sort((a: any, b: any) => b.chore.effort * b.count - a.chore.effort * a.count);
      const weekPersonDeltas = Array.from({ length: names.length }, () => 0);
      const weekSlots: any[] = Array.from({ length: names.length }, () => []);
      for (const occ of occs) {
        const id = occ.chore.id;
        const delta = occ.chore.effort * occ.count;

        // choose person with smallest total; break ties using lastDone
        let bestIdx = 0;
        let bestVal = this.totals[0] || 0;
        for (let p = 1; p < names.length; p++) {
          const val = this.totals[p] || 0;
          if (val < bestVal) { bestIdx = p; bestVal = val; }
          else if (val === bestVal) {
            const lastBest = lastDone.get(`${bestIdx}-${id}`) || 0;
            const lastP = lastDone.get(`${p}-${id}`) || 0;
            if (lastP < lastBest) bestIdx = p;
          }
        }

        lastDone.set(`${bestIdx}-${id}`, w);
        weekSlots[bestIdx].push(occ);
        weekPersonDeltas[bestIdx] += delta;
        this.totals[bestIdx] += delta;
      }

      // convert to named mapping for template consumption
      const mapping: any = {};
      for (let p = 0; p < names.length; p++) mapping[names[p]] = weekSlots[p];
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
        const s = schedule[w] || { A: [], B: [] };
        return {
          num: w,
          dates: this.weekDates(year, w),
          A: s.A,
          B: s.B
        };
      });
      return { name: this.MONTH_NAMES[m], weeks: weeksArr };
    }).filter(Boolean) as any[];

    this.showPlan = true;
    setTimeout(() => window.scrollTo(0,0), 0);
  }

  get planBalanceDiff(): number {
    if (!this.totals || !this.totals.length) return 0;
    const min = Math.min(...this.totals);
    const max = Math.max(...this.totals);
    return Math.abs(max - min);
  }

  isPlanBalanced(maxDiff = 3): boolean {
    return this.planBalanceDiff <= maxDiff;
  }

  goBack() {
    this.showPlan = false;
  }

  print() { window.print(); }
}
