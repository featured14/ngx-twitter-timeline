import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTwitterTimelineComponent } from './ngx-twitter-timeline.component';

describe('NgxTwitterTimelineComponent', () => {
  let component: NgxTwitterTimelineComponent;
  let fixture: ComponentFixture<NgxTwitterTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTwitterTimelineComponent ]
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
