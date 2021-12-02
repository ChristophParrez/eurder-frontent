import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { ItemsViewComponent } from './components/items-view/items-view.component';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AboutViewComponent,
    ItemsViewComponent,
    CustomersViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
