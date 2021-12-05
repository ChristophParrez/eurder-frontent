import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.scss']
})
export class InputCounterComponent implements OnInit {

  @Input() value: number = 0;
  @Input() max: number = 0;

  isInvalid: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.isInvalid = this.value > this.max;
  }

}
