import { TestBed } from '@angular/core/testing';

import { SistemasExternosService } from './sistemas-externos.service';

describe('SistemasExternosService', () => {
  let service: SistemasExternosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemasExternosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
