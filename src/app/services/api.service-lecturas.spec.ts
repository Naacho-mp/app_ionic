import { TestBed } from '@angular/core/testing';

import { ApiServiceLecturas } from './api.service-lecturas';

describe('ApiServiceLecturas', () => {
  let service: ApiServiceLecturas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceLecturas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
