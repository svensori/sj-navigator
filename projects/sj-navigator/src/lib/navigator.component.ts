import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { RoutingModel } from 'sj-navigator';

import { NavigatorService } from './navigator.service';

@Component({
  selector: 'sj-nav',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit, AfterViewInit {
  @Input() mode: MatDrawerMode;
  @Output() navigated = new EventEmitter<string>();
  @ViewChild(MatSidenav) sideNav: MatSidenav;

  childRoutes: RoutingModel;

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
    this.navigatorService.childRoutes
      .subscribe(routes => this.childRoutes = routes);
  }

  ngAfterViewInit(): void {
    this.navigatorService.setSideNav(this.sideNav);
  }

  /**
   * Event Emmitters
   */
  navigate(route: string) {
    this.navigated.emit(route);
  }

  enter() {
    console.log(!!this.childRoutes);
  }
}
