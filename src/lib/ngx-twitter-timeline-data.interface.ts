export default interface NgxTwitterTimelineData {
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
