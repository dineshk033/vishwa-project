import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-view-three',
  templateUrl: './card-view-three.component.html',
  styleUrls: ['./card-view-three.component.scss']
})
export class CardViewThreeComponent implements OnInit {
  @Input() productDetail:any;
  image;
  constructor() { }

  ngOnInit(): void {
    this.image = `https://source.unsplash.com/1600x900/?${this.productDetail.brand}`
  }

}
