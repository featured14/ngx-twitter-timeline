import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxTwitterTimelineService {
  private TWITTER_SCRIPT_ID = 'twitter-wjs';
  private TWITTER_WIDGET_URL = 'https://platform.twitter.com/widgets.js';

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  loadScript(): Observable<any> {
    if (!isPlatformBrowser(this.platformId)) {
      return of(null);
    }

    return new Observable(observer => {

      this.startScriptLoad();

      (window as any)['twttr'].ready((twttr: any) => {
        observer.next(twttr);
        observer.complete();
      });

    });
  }

  private startScriptLoad() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    (window as any)['twttr'] = (function(d: Document, s: string, id: string, url: string)
    {
      let script,
      firstScriptEl = d.getElementsByTagName(s)[0],
      twitterScript: any = (window as any)['twttr'] || {};
      if (d.getElementById(id)) {
        return twitterScript;
      }

      script = d.createElement(s);
      script.id = id;
      script.src = url;
      firstScriptEl.parentNode!.insertBefore(script, firstScriptEl);

      twitterScript._e = [];

      twitterScript.ready = function(f: any) {
        twitterScript._e.push(f);
      };

      return twitterScript;
    }(this.document, 'script', this.TWITTER_SCRIPT_ID, this.TWITTER_WIDGET_URL));
  }
}
