import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-item-edit-view',
  templateUrl: './item-edit-view.component.html',
  styleUrls: ['./item-edit-view.component.scss']
})
export class ItemEditViewComponent implements OnInit {

  @Input() item: any;

  editItemFormGroup = this.formBuilder.group({
    name: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.editItemFormGroup.value.name || this.editItemFormGroup.value.name.trim() === '') return;
    this.editItemFormGroup.reset();
  }

}
