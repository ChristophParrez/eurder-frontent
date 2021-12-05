import { Component, OnInit } from '@angular/core';
import { Item } from "../../../model/Item";
import { ItemService } from "../../../service/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  nameFilterText: string;

  constructor(private itemService: ItemService) {
    this.nameFilterText = '';
  }

  ngOnInit(): void {
    this.getItems();
    // setTimeout(() => this.getItems(), 5000);
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  setFilter(filterText: any) {
    this.nameFilterText = filterText;
  }
}
