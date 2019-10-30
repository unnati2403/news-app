import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DpAppService {

    api_key = '65f781a8c5734b19931b7e953ebc8b02';
    newsData = [];

    constructor(private http: HttpClient) { }

    /**
     * makes http request with parameters, and fetches data
     * @memberof DpAppService
     */
    fetchNewsData(params) {
        params['apiKey'] = this.api_key;
        let option = { params: params };
        return this.http.get('https://newsapi.org/v2/everything?', option).pipe(catchError((err) => throwError(err)));
    }

    setNewsData(data) {
        this.newsData = data;
    }

    getNewsData() {
        return this.newsData;
    }
}
