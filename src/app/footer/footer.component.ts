import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('data') todos = [];

  constructor() { }

  ngOnInit() {
  }

}
