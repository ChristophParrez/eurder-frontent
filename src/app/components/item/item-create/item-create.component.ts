import { Component, OnInit } from '@angular/core';
import { ItemService } from "../../../service/item.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {


  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  onSubmit(form: FormGroup): void {
    form.disable();
    this.itemService.addItem(form.value).subscribe({
      next: () => this.router.navigate(['..'], {relativeTo: this.route }),
      error: () => form.enable()
    });
  }


}
