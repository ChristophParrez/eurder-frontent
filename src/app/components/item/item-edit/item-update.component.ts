import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ItemService } from "../../../service/item.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-edit-view',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  // @Input() item: any;
  @Input() formDisabled: any = false;

  item: any;
  loadingError: boolean = false;

  editItemFormGroup: FormGroup = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: '',
  });

  curDescriptionChars: number = 0;
  maxDescriptionChars: number = 255;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.editItemFormGroup) this.editItemFormGroup.disable();
    // @ts-ignore
    this.editItemFormGroup.get("description").valueChanges.subscribe(val => {
      if (val) {
        this.curDescriptionChars = val.length;
      }
    });
    this.getItem();
  }

  getItem(): void {
    this.itemService.getItem(this.route.snapshot.paramMap.get('id')!).subscribe(response => {
      this.item = response;
      this.populateForm()
    });

    this.itemService.getItem(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: (item) => {
        this.item = item;
        this.populateForm();
      },
      error: (e) => this.loadingError = true,
      complete: () => console.info('item is loaded')
    });
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
    this.itemService.updateItem(this.editItemFormGroup.value, this.item.id).subscribe();
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
