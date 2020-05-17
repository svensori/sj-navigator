import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { NavigatorService } from './navigator.service';

@Component({
  selector: 'sj-nav',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements AfterViewInit {
  @Output() signOut = new EventEmitter();
  @Output() navigated = new EventEmitter<string>();
  @ViewChild(MatSidenav) sideNav: MatSidenav;

  get childRoutes() {
    return this.navigatorService.childRoutes;
  }

  constructor(private navigatorService: NavigatorService) { }

  ngAfterViewInit(): void {
    this.navigatorService.setSideNav(this.sideNav);
  }

  /**
   * Event Emmitters
   */
  signOutClicked() {
    this.signOut.emit();
  }

  navigate(route: string) {
    this.navigated.emit(route);
  }
}
