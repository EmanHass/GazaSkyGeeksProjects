import { TestBed } from '@angular/core/testing';

import { JobseekersService } from './jobseekers.service';

describe('JobseekersService', () => {
  let service: JobseekersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobseekersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
