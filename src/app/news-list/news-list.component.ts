import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import * as _ from 'lodash';
import { DpNewsAppService } from '../news-app.service';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

    newsData = [];
    errorMsg = '';
    showLoader = false;
    constructor(private appService: DpNewsAppService, private route: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.retryApi();
    }

    retryApi() {
        this.showLoader = true;
        this.errorMsg = '';
        let params = {};
        params['q'] = 'india',
            params['language'] = 'en'
        this.appService.fetchNewsData(params).pipe(finalize(() => {
            this.showLoader = false;
        })).subscribe(resp => {
            this.errorMsg = '';
            this.newsData = _.filter(resp['articles'], (item) => {
                item['publishedAt'] = new Date(item['publishedAt']);
                return item;
            });
        }, error => {
            this.errorMsg = 'No data available';
        });
    }

    /**
     * it will store the selected news data into service and then navigate to article view
     * @memberof NewsListComponent
     */
    navigateToView(item) {
        this.appService.setNewsData(item);
        this.route.navigate(['./view'], { relativeTo: this.activeRoute });
    }
}
