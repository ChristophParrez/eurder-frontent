import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ItemService } from "../../../service/item.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  item: any;
  loadingError: boolean = false;

  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    this.itemService.getItem(this.route.snapshot.paramMap.get('id')!).subscribe({
      next: (item) => this.item = item,
      error: (e) => this.loadingError = true,
      complete: () => console.info('item is loaded')
    });
  }

  onSubmit(updateFormGroup: FormGroup): void {
    this.itemService.updateItem(updateFormGroup.value, this.item.id).subscribe(() => this.getItem());
  }

}
