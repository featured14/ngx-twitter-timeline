import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterTimelineComponent } from './twitter-timeline.component';
import { TwitterTimelineService } from './twitter-timeline.service';

export * from './twitter-timeline.component';
export * from './twitter-timeline.service';
export * from './TwitterTimelineData';
export * from './TwitterTimelineOptions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TwitterTimelineComponent
  ],
  providers: [
    TwitterTimelineService
  ],
  exports: [
    TwitterTimelineComponent
  ]
})
export class NgxTwitterTimelineModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxTwitterTimelineModule,
      providers: [TwitterTimelineService]
    };
  }
}
