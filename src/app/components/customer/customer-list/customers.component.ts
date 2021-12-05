import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../../service/customer.service";
import { Customer } from "../../../model/Customer";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  nameFilterText: string;

  constructor(private customerService: CustomerService) {
    this.nameFilterText = '';
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(items => this.customers = items);
  }

  setFilter(filterText: any) {
    this.nameFilterText = filterText;
  }

}
