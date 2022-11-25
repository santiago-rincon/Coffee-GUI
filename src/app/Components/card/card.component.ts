import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: string =''
  @Input() sensor: string =''
  @Input() img_front: string =''
  @Input() img_back: string =''
  @Input() route: string =''
  constructor() { }

  ngOnInit(): void {
  }

}
