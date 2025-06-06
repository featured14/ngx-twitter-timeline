import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';

import { NgxTwitterTimelineService } from './ngx-twitter-timeline.service';

describe('NgxTwitterTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: DOCUMENT, useValue: document }
    ]
  }));

  it('should be created', () => {
    const service: NgxTwitterTimelineService = TestBed.get(NgxTwitterTimelineService);
    expect(service).toBeTruthy();
  });
});
