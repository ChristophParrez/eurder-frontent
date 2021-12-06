import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Customer } from "../../../model/Customer";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  @Input() customer: Customer | undefined;
  @Input() formDisabled: boolean = false;
  @Output() onSubmit = new EventEmitter<any>();

  formGroup: FormGroup;
  editMode: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.setupFormGroup();
  }

  ngOnInit(): void {
    if (this.formGroup && this.formDisabled) this.formGroup.disable();
    if (this.customer) this.editMode = true;
    this.populateForm();
  }

  onFormSubmit(): void {
    if (this.formGroup.invalid) {
      this.triggerValidationOnFields();
      console.error("The form is invalid. Please try again.");
      return;
    }
    this.toggleFormDisability();
    this.onSubmit.emit(this.formGroup);
  }

  private triggerValidationOnFields(formGroup?: FormGroup | FormArray): void {
    if (formGroup == null) formGroup = this.formGroup;
    Object.keys(formGroup.controls).forEach(field => {
      // @ts-ignore
      const control = formGroup.controls[field];
      if (control instanceof FormGroup || control instanceof FormArray) this.triggerValidationOnFields(control);
      else control.markAsTouched({onlySelf: true});
    });
  }

  private setupFormGroup(): FormGroup {
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: this.formBuilder.group({
        localPart: 'temporarilySomeDummyDataToPassValidationInBackend',
        domain: 'temporarilySomeDummyDataToPassValidationInBackend',
        complete: ['', Validators.required]
      }),
      address: this.formBuilder.group({
        streetName: ['', Validators.required],
        houseNumber: ['', Validators.required],
        postalCode: ['', Validators.required],
        country: ['', Validators.required],
      }),
      phoneNumber: this.formBuilder.group({
        number: ['', Validators.required],
        countryCallingCode: 'temporarilySomeDummyDataToPassValidationInBackend'
      })
    });
  }

  populateForm(): void {
    if (this.customer) this.formGroup.patchValue({
      firstname: this.customer.firstname,
      lastname: this.customer.lastname,
      email: this.customer.email,
      address: this.customer.address,
      phoneNumber: this.customer.phoneNumber,
    });
  }

  toggleFormDisability(): void {
    if (this.formDisabled) this.formGroup.enable(); else this.formGroup.disable();
    this.formDisabled = !this.formDisabled;
  }

}
