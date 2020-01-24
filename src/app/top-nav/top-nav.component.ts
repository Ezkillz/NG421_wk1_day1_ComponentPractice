import { Component, OnInit } from '@angular/core';
import themessages from "../messages";
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  messages: Array<any> = [ ]
  constructor() { }

  ngOnInit() {
    this.messages = themessages;
  }

}
