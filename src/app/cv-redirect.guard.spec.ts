import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { CvRedirectGuard } from './cv-redirect.guard';

describe('cvRedirectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(
      () => new CvRedirectGuard(TestBed.inject(Router)) // Pass the Router instance
    ).canActivate(...guardParameters);

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
