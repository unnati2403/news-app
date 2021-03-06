import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DpNewsAppService } from './news-app.service';
import { AppRoutingModule } from './app-routing.module';
import { NewsViewComponent } from './news-view/news-view.component';
import { NewsListComponent } from './news-list/news-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsViewComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DpNewsAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
