import {TNSSegmentConstants} from '../common';

declare var SEGAnalytics: any, SEGAnalyticsConfiguration: any, SEGGoogleAnalyticsIntegrationFactory: any;

export class TNSSegmentConfig {
  public static SETUP(writeKey: string) {
    TNSSegmentConstants.WRITE_KEY = writeKey;
    let config = SEGAnalyticsConfiguration.configurationWithWriteKey(writeKey);
    config.use(SEGGoogleAnalyticsIntegrationFactory.instance);
    SEGAnalytics.setupWithConfiguration(config);    
  }
}