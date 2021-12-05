import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Item } from "../../../model/Item";
import { Observable } from "rxjs";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  @Input() item: Item | undefined;
  @Input() formDisabled: boolean = false;
  @Output() onSubmit = new EventEmitter<any>();

  formGroup: FormGroup;

  curDescriptionChars: number = 0;
  maxDescriptionChars: number = 255;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.setupFormGroup();
  }

  ngOnInit(): void {
    if (this.formGroup && this.formDisabled) this.formGroup.disable();
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

  private triggerValidationOnFields(): void {
    Object.keys(this.formGroup.controls).forEach(field => this.formGroup.get(field)?.markAsTouched({onlySelf: true}));
  }

  private setupFormGroup(): FormGroup {
    const formGroup: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(0.01)]],
      amountOfStock: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]],
    });
    formGroup.get("description")!.valueChanges.subscribe(val => this.curDescriptionChars = val ? val.length : 0);
    return formGroup;
  }

  populateForm(): void {
    if (this.item) this.formGroup.patchValue({
      name: this.item.name,
      description: this.item.description,
      price: this.item.price,
      amountOfStock: this.item.amountOfStock,
    });
  }

  toggleFormDisability(): void {
    if (this.formDisabled) this.formGroup.enable(); else this.formGroup.disable();
    this.formDisabled = !this.formDisabled;
  }
}
