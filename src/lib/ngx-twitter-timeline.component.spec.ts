import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { NgxTwitterTimelineService } from './ngx-twitter-timeline.service';

import { NgxTwitterTimelineComponent } from './ngx-twitter-timeline.component';

describe('NgxTwitterTimelineComponent', () => {
  let component: NgxTwitterTimelineComponent;
  let fixture: ComponentFixture<NgxTwitterTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTwitterTimelineComponent ],
      providers: [
        NgxTwitterTimelineService,
        { provide: DOCUMENT, useValue: document }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTwitterTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
