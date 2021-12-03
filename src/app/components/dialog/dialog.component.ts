import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  private element: any;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    console.log('element: ', this.element);
    document.body.appendChild(this.element);
  }

}
