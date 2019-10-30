import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DpNewsAppService } from '../news-app.service';

@Component({
    selector: 'app-news-view',
    templateUrl: './news-view.component.html',
    styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {

    newsData;
    constructor(private appService: DpNewsAppService, private route: Router) { }

    ngOnInit() {
        if (Object.keys(this.appService.getNewsData()).length > 0) {
            this.newsData = this.appService.getNewsData();
        } else {
            this.route.navigate(['/list']);
        }
    }
}
