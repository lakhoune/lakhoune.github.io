import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cvRedirectGuard } from './cv-redirect.guard';

describe('cvRedirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cvRedirectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
