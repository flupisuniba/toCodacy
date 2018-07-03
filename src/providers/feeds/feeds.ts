import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FeedsProvider Provider');
  }

  getAllFeeds() {
    return this.http.get('http://localhost:8080/feeds');
  }

}
