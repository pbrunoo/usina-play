import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() content: any;

  constructor() {}

  public enter(event: any) {
    console.log(event)
  }

}
