import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <button (click)="handleClick()">{{ label }}</button>
  `,
  styles: [`
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: blue;
      font-size: 20px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {

  @Input() label = 'default';
  @Output() action = new EventEmitter<number>();

  private clicks = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.clicks++;
    this.action.emit(this.clicks);
  }

}
