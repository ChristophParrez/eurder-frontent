import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";
import { AboutComponent } from "../components/about/about.component";
import { ItemsComponent } from "../components/item/item-list/items.component";
import { CustomersComponent } from "../components/customer/customer-list/customers.component";
import { ItemCreateComponent } from "../components/item/item-create/item-create.component";
import { ItemDetailsComponent } from "../components/item/item-details/item-details.component";
import { CustomerUpdateComponent } from "../components/customer/customer-update/customer-update.component";
import { CustomerCreateComponent } from "../components/customer/customer-create/customer-create.component";
import { CustomerDetailsComponent } from "../components/customer/customer-details/customer-details.component";
import { BasketListComponent } from "../components/basket/basket-list/basket-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'items/new', component: ItemCreateComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/new', component: CustomerCreateComponent },
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'customers/edit/:id', component: CustomerUpdateComponent },
  { path: 'basket', component: BasketListComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
