import { TestBed } from '@angular/core/testing';

import { CareService } from './care.service';

describe('CareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareService = TestBed.get(CareService);
    expect(service).toBeTruthy();
  });
});
