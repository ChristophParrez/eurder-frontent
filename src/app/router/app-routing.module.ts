import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../components/home/home.component";
import { AboutComponent } from "../components/about/about.component";
import { ItemsComponent } from "../components/item/item-list/items.component";
import { CustomersComponent } from "../components/customer/customer-list/customers.component";
import { ItemDetailsComponent } from "../components/item/item-details/item-details.component";
import { ItemCreateComponent } from "../components/item/item-create/item-create.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'items/new', component: ItemCreateComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'basket', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
