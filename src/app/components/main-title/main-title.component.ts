import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent implements OnInit {

  @Input() showFilter: boolean = false;
  @Output() filterChanged = new EventEmitter<any>();

  filterText: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeFilter(newValue: any) {
    this.filterChanged.emit(newValue);
  }

}
