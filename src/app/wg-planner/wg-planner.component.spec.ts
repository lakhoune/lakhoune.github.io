import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WgPlannerComponent } from './wg-planner.component';

describe('WgPlannerComponent', () => {
  let component: WgPlannerComponent;
  let fixture: ComponentFixture<WgPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WgPlannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WgPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include print CSS rules to avoid page breaks inside month cards', () => {
    // Search loaded stylesheets for a rule targeting .month-card with print-safe properties
    const hasPrintRule = (() => {
      const sheetList = Array.from(document.styleSheets || []);
      function checkRules(rules: CSSRuleList | any): boolean {
        for (const rr of Array.from(rules || [])) {
          try {
            if ((rr as CSSStyleRule).selectorText) {
              const cssText = (rr as CSSStyleRule).cssText || '';
              if (cssText.indexOf('.month-card') !== -1) {
                if (/page-break-after|break-inside|page-break-inside|page-break-before|page-break-inside|overflow\s*:/i.test(cssText)) {
                  return true;
                }
              }
            } else if ((rr as CSSMediaRule).cssRules) {
              if (checkRules((rr as CSSMediaRule).cssRules)) return true;
            }
          } catch (e) {
            continue;
          }
        }
        return false;
      }
      for (const sheet of sheetList) {
        try {
          if (checkRules((sheet as CSSStyleSheet).cssRules)) return true;
        } catch (e) { continue; }
      }
      return false;
    })();

    expect(hasPrintRule).toBeTrue();
  });
});
