import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'customer-card-two',
  templateUrl: './card-view-two.component.html',
  styleUrls: ['./card-view-two.component.scss']
})
export class CardViewTwoComponent implements OnInit {
  @Input() productDetail:any;
  constructor() { }

  ngOnInit(): void {
  }

}
