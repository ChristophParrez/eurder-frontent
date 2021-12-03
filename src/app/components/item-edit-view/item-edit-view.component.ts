import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ItemService } from "../../service/item.service";

@Component({
  selector: 'app-item-edit-view',
  templateUrl: './item-edit-view.component.html',
  styleUrls: ['./item-edit-view.component.scss']
})
export class ItemEditViewComponent implements OnInit {

  @Input() item: any;
  @Input() formDisabled: any = false;

  editItemFormGroup: FormGroup = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: '',
  });

  curDescriptionChars: number = 0;
  maxDescriptionChars: number = 255;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (this.editItemFormGroup) this.editItemFormGroup.disable();
    // @ts-ignore
    this.editItemFormGroup.get("description").valueChanges.subscribe(val => {
      if (val) {
        this.curDescriptionChars = val.length;
      }
    });
    this.populateForm();
  }

  populateForm(): void {
    if (!this.item) return;
    this.editItemFormGroup.setValue({
      name: this.item.name,
      description: this.item.description,
      price: this.item.price,
      amountOfStock: this.item.amountOfStock,
    });
    this.updateDescriptionCounter();
  }

  onSubmit(): void {
    if (!this.editItemFormGroup.value.name || this.editItemFormGroup.value.name.trim() === '') return;
    this.toggleFormDisability();
    this.itemService.updateItem(this.editItemFormGroup.value, this.item.id).subscribe(this.populateForm);
  }

  toggleFormDisability(): void {
    if (this.editItemFormGroup.disabled) this.editItemFormGroup.enable();
    else this.editItemFormGroup.disable();
    this.formDisabled = !this.formDisabled;
  }

  updateDescriptionCounter() {
    this.curDescriptionChars = this.editItemFormGroup.value.description.length;
  }
}
