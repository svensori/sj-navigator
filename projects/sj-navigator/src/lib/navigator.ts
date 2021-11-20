import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { NavigatorService } from './navigator-service';
import { RoutingModel } from './navigator-types';

@Component({
  selector: 'ez-nav',
  templateUrl: './navigator.html',
  styleUrls: ['./navigator.scss']
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

