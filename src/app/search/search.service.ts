import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {
  clientID: string = 'PAST YOUR CLIENT ID';
  baseUrl: string = 'https://m-rewards.herokuapp.com/names/';

  constructor(private _http: HttpClient) { }

  search(queryString: string): Observable<any> {
    let _URL = this.baseUrl;
    return this._http.get(_URL);
  }
}
