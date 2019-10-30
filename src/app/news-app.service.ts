import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_KEY} from './constants';

@Injectable({
    providedIn: 'root'
})
export class DpNewsAppService {

    newsData = [];

    constructor(private http: HttpClient) { }

    /**
     * makes http request with parameters, and fetches data
     * @memberof DpAppService
     */
    fetchNewsData(params) {
        params['apiKey'] = API_KEY;
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
