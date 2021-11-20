import { Component, Directive, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NavigatorService } from '../navigator-service';
import { RoutingModel } from '../navigator-types';

@Component({
  selector: 'sj-nav-sub-routes',
  templateUrl: './sub-routes.html',
  styleUrls: ['./sub-routes.scss']
})
export class SubRoutesComponent implements OnInit {

  @Output() navigated = new EventEmitter<string>();

  get childRoutes() {
    return this.navigatorService.childRoutes;
  }

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() { }

  navigate(route: string) {
    this.navigated.emit(route);
  }
}

@Directive({
  selector: '[navigatorChildItem]'
})
export class NavigatorChildItemDirective implements OnInit {

  @Input() childRouteIndex: number;
  @Output() navigated = new EventEmitter<string>();

  private childRoutes: RoutingModel;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.navigatorService.getSideNavInstance().open();
  }

  @HostListener('click')
  onMouseClick() {
    const route = this.childRoutes[this.childRouteIndex].path;
    this.navigated.emit(route);
    this.navigatorService.getSideNavInstance().close();
  }

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
    this.navigatorService.childRoutes
      .subscribe(data => {
        this.childRoutes = data;
      });
  }
}

