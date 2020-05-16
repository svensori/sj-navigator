import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sj-nav-navigator-header',
  templateUrl: './navigator-header.component.html',
  styleUrls: ['./navigator-header.component.scss']
})
export class NavigatorHeaderComponent implements OnInit {

  @Output() signOut = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  signOutClicked() {
    this.signOut.emit();
  }
}
