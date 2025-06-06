import { Component, ElementRef, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxTwitterTimelineService } from './ngx-twitter-timeline.service';
import NgxTwitterTimelineData from './ngx-twitter-timeline-data.interface';
import NgxTwitterTimelineOptions from './ngx-twitter-timeline-options.interface';

@Component({
  selector: 'ngx-twitter-timeline',
  template: ``
})
export class NgxTwitterTimelineComponent {
/**
   * The data source definition object for the content to be displayed in the widget.
   * May be a widget ID string for a search API timeline or legacy widget
   */
  @Input() data: NgxTwitterTimelineData;
  /**
   * A hash of additional options to configure the widget
   */
  @Input() opts: NgxTwitterTimelineOptions;
  defaultOpts: NgxTwitterTimelineOptions = {
    tweetLimit: 5
  };;
  defaultData: NgxTwitterTimelineData = {
    sourceType: 'url',
    url: 'https://twitter.com/twitterdev',
    screenName: 'twitterdev'
  };

  constructor(
    private element: ElementRef,
    private twitterTimelineService: NgxTwitterTimelineService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId) && this.data && this.data.sourceType) {
      switch (this.data.sourceType) {
        case 'url':
          delete this.defaultData.screenName;
          break;
        case 'profile':
          delete this.defaultData.url;
          break;
        default:
          break;
      }
      this.loadTwitterWidget();
    }
  }

  loadTwitterWidget() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.twitterTimelineService
      .loadScript()
      .subscribe(
        twttr => {
          const nativeElement = this.element.nativeElement;
          nativeElement.innerHTML = "";
          (window as any)['twttr']
            .widgets
            .createTimeline(
              { ...this.defaultData, ...this.data },
              nativeElement,
              { ...this.defaultOpts, ...this.opts }
            )
            .then(embed => {
              // console.log(embed);
            })
            .catch(error => console.error(error))
        },
        err => console.error(err));
  }
}
