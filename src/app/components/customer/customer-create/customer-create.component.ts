import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { CustomerService } from "../../../service/customer.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup): void {
    form.disable();
    this.customerService.addCustomer(form.value).subscribe({
      next: () => this.router.navigate(['..'], {relativeTo: this.route }),
      error: () => form.enable()
    });
  }
}
