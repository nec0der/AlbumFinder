import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ITunesService {
  constructor(private http: Http) {
  }

  getData(name): Observable {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return this.http.get(
      `https://itunes.apple.com/search?entity=album&term=${name}`,
      {headers: new Headers(headersConfig)})
      .map(res => {
        return JSON.parse(res['_body']);
      });
  }
}
