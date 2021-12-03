import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Item } from "../../model/Item";
import { ItemService } from "../../service/item.service";

@Component({
  selector: 'app-item-details-view',
  templateUrl: './item-details-view.component.html',
  styleUrls: ['./item-details-view.component.scss']
})
export class ItemDetailsViewComponent implements OnInit {

  item: Item | any;

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemService.getItem(this.route.snapshot.paramMap.get('id')!).subscribe(response => this.item = response);
  }

}
