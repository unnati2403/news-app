import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsViewComponent } from './news-view/news-view.component';

export const AppRoutes: Route[] = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: 'list',
                component: NewsListComponent
            },
            {
                path: 'list/view',
                component: NewsViewComponent
            },
            {
                path: '**',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    }
];
