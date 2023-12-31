import { TestBed } from '@angular/core/testing';

import { LogInUpOutService } from './log-in-up-out.service';

describe('LogInUpOutService', () => {
  let service: LogInUpOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInUpOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
