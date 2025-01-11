import { TestBed } from '@angular/core/testing';

import { BonoNgService } from './bono-ng.service';

describe('BonoNgService', () => {
  let service: BonoNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonoNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
