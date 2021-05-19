import { TestBed } from '@angular/core/testing';

import { SprintserviceService } from './sprintservice.service';

describe('SprintserviceService', () => {
  let service: SprintserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
