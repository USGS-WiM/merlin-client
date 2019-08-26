import { TestBed } from '@angular/core/testing';

import { AcidsService } from './acids.service';

describe('AcidsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcidsService = TestBed.get(AcidsService);
    expect(service).toBeTruthy();
  });
});
