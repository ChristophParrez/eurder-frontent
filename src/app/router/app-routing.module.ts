import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from "../components/home-view/home-view.component";
import { AboutViewComponent } from "../components/about-view/about-view.component";
import { ItemsViewComponent } from "../components/item/items-view/items-view.component";
import { CustomersViewComponent } from "../components/customers-view/customers-view.component";
import { ItemDetailsViewComponent } from "../components/item/item-details-view/item-details-view.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'items', component: ItemsViewComponent },
  { path: 'items/new', component: ItemsViewComponent },
  { path: 'items/:id', component: ItemDetailsViewComponent },
  { path: 'customers', component: CustomersViewComponent },
  { path: 'basket', component: HomeViewComponent },
  { path: 'about', component: AboutViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
