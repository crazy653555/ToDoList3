import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  private _todo = [];
  tooMore = false;

  @Input('data')
  set todos(value) {
    this._todo = value;
    this.tooMore = this.todos.length > 5;
  }

  @Output() clearBtnClick = new EventEmitter();

  get todos() {
    return this._todo;
  }


  constructor() { }

  ngOnInit() {
  }

  logFromFooter() {
    console.log('log from footer!!');
  }

}
