import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-view-three',
  templateUrl: './card-view-three.component.html',
  styleUrls: ['./card-view-three.component.scss']
})
export class CardViewThreeComponent implements OnInit {
  @Input() productDetail:any;

  constructor() { }

  ngOnInit(): void {
  }

}
