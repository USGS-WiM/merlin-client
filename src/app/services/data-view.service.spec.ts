import { TestBed } from '@angular/core/testing';

import { DataViewService } from './data-view.service';

describe('DataViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataViewService = TestBed.get(DataViewService);
    expect(service).toBeTruthy();
  });
});
