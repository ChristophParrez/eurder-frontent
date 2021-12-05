import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemsComponent } from './components/item/item-list/items.component';
import { CustomersComponent } from './components/customer/customer-list/customers.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { StockUrgencyImagePipe } from './pipe/stock-urgency-image.pipe';
import { StockUrgencyLabelPipe } from './pipe/stock-urgency-label.pipe';
import { ContentComponent } from './components/content/content.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { DialogComponent } from './components/dialog/dialog.component';
import { ItemDetailsComponent } from './components/item/item-details/item-details.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemUpdateComponent } from './components/item/item-update/item-update.component';
import { InputCounterComponent } from './components/input-counter/input-counter.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';
import { ItemFormComponent } from './components/item/item-form/item-form.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { BasketListComponent } from './components/basket/basket-list/basket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ItemsComponent,
    CustomersComponent,
    HeaderComponent,
    FooterComponent,
    MainTitleComponent,
    StockUrgencyImagePipe,
    StockUrgencyLabelPipe,
    ContentComponent,
    SearchFilterPipe,
    DialogComponent,
    ItemDetailsComponent,
    ToolBarComponent,
    NotFoundComponent,
    ItemUpdateComponent,
    InputCounterComponent,
    ItemCreateComponent,
    ItemFormComponent,
    CustomerCreateComponent,
    CustomerDetailsComponent,
    CustomerUpdateComponent,
    CustomerFormComponent,
    BasketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
