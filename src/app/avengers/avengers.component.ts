import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {

  @Input()
  imgSrc: string = 'assets/avengers.jpg';

  @Input()
  altTxt?: string = 'avengers';

  @Input()
  figCaptionTxt?: string =
    'a picture of all the avengers';

  @Input()
  imgOpacity?: number = 1;

  constructor() {}

  ngOnInit(): void {}
}

