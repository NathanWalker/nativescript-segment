import * as application from 'application';
import {TNSSegmentConfig} from 'nativescript-segment';

class MyDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];
  
  public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {

    TNSSegmentConfig.SETUP('XVDaTIQYy5g0akx5iTJmPozLKWFLkX6y');
    return true;
  }
}
application.ios.delegate = MyDelegate;
application.mainModule = "main-page";
application.cssFile = "./app.css";
application.start();
