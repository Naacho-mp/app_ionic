import { TestBed } from '@angular/core/testing';

import { ApiServiceBoletas } from './api.service-boletas';

describe('ApiServiceBoletas', () => {
  let service: ApiServiceBoletas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceBoletas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
