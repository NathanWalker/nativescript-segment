import {Observable} from 'data/observable';
import {TNSSegment} from 'nativescript-segment';

export class SegmentDemo extends Observable {
  private _segment: TNSSegment;

  constructor() {
    super();

    this._segment = new TNSSegment();
  }

  public track() {
    this._segment.track('Demo Event', { category: 'TEST_CATEGORY', label: 'Test Label'});
  }  
}