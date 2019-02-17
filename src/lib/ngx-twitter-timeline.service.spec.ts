import { TestBed } from '@angular/core/testing';

import { NgxTwitterTimelineService } from './ngx-twitter-timeline.service';

describe('NgxTwitterTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTwitterTimelineService = TestBed.get(NgxTwitterTimelineService);
    expect(service).toBeTruthy();
  });
});
