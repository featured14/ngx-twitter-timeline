export default interface NgxTwitterTimelineOptions {
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
