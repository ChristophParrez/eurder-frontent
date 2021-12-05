import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CustomerService } from "../../../service/customer.service";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  customer: any;
  loadingError: boolean = false;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    this.customerService.getCustomer(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: (item) => this.customer = item,
      error: (e) => this.loadingError = true,
      complete: () => {}
    });
  }

  onSubmit(updateFormGroup: FormGroup): void {
    this.customerService.updateCustomer(updateFormGroup.value, this.customer.id).subscribe(() => this.getCustomer());
  }

}
