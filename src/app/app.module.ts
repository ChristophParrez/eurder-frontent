import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { ItemsViewComponent } from './components/items-view/items-view.component';
import { CustomersViewComponent } from './components/customers-view/customers-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { StockUrgencyPipe } from './pipe/stock-urgency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AboutViewComponent,
    ItemsViewComponent,
    CustomersViewComponent,
    HeaderComponent,
    FooterComponent,
    MainTitleComponent,
    StockUrgencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
