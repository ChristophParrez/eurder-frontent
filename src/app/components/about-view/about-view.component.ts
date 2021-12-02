import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {

  year: string = new Date().getFullYear().toString();

  constructor() { }

  ngOnInit(): void {
  }

}
