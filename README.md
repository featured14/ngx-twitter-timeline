Embed Twitter Timeline in Angular application.

## Installation

To install this library, run:

```bash
$ npm install ngx-twitter-timeline --save
```

## Usage

Import in `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ngx-twitter-timeline
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify library as an import
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its component in your Angular application:

```xml
<!-- You can now use the library component in app.component.html -->
<ngx-twitter-timeline 
	[data]="{sourceType: 'url', url: 'https://twitter.com/twitterdev'}"
	[opts]="{tweetLimit: 5}"
></ngx-twitter-timeline>
```

## Data
Data can take value of `url` or `profile`.  
If `url` is set, you have to provide a valid Twitter URL;  
If `profile` is set, you have to set `screenName` as a valid Twitter screen name. E.g. `@twitterdev`  
  
`url` and `screenName` are mutually exclusive.  

```typescript
NgxTwitterTimelineData {
  /**
   * profile or URL
   */
  sourceType: string;
  /**
   * Valid Twitter username
   */
  screenName?: string;
  /**
   * Absolute URL of a Twitter profile, likes, list, or collection
   */
  url: string;
}
```

## Options
```typescript
NgxTwitterTimelineOptions {
  /**
   * Render a timeline statically, displaying only n number of Tweets.
   * Range: 1-20
   */
  tweetLimit?: number;
  /**
   * Set a fixed height of the embedded widget
   * Positive integer
   */
  height?: number;
  /**
   * Adjust the color of borders inside the widget.
   * Hexadecimal color
   */
  borderColor?: string;
  /**
   * Sets the theme of the widget. Default = 'light'.
   * 'light' or 'dark'
   */
  theme?: string;
  /**
   * Toggle the display of design elements in the widget. This parameter is a space-separated list of values
   * Values: noheader, nofooter, noborders, transparent, noscrollbar
   */
  chrome?: string[];
  /**
   * Apply the specified aria-polite behavior to the rendered timeline.
   * New Tweets may be added to the top of a timeline, affecting screen readers
   * Values: polite, assertive, rude
   */
  ariaPolite?: string[];
}
```


## License

MIT © 2017 [Bogdan Dinga](mailto:bogdan.dinga@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
