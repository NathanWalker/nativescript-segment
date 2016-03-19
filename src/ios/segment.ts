declare var SEGAnalytics: any;

export class TNSSegment {

  public track(action: string, properties: any) {
    // for (let key in SEGAnalytics.sharedAnalytics()) {
    //   console.log(key);
    // }
    SEGAnalytics.sharedAnalytics().trackProperties(action, properties);
  }
}