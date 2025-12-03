import { TestBed } from '@angular/core/testing';

import ApiServiceLogin from './api.service-login';

describe('ApiServiceLogin', () => {
  let service: ApiServiceLogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
