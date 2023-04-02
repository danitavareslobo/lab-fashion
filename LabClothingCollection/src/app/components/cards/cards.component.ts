import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  constructor() { }

  @Input() public titulo!: string;
  @Input() public valor!: number;
  @Input() public info: boolean = false;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}