import { TestBed } from '@angular/core/testing';

import { ApiServiceMedidores } from './api.service-medidores';

describe('ApiServiceMedidores', () => {
  let service: ApiServiceMedidores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceMedidores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
