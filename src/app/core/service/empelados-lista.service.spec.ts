import { TestBed } from '@angular/core/testing';

import { EmpeladosListaService } from './empelados-lista.service';

describe('EmpeladosListaService', () => {
  let service: EmpeladosListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpeladosListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
