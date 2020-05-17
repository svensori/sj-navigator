import { Directive, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { RoutingModel } from '../interface/nav-item';
import { NavigatorService } from '../navigator.service';

@Directive({
  selector: '[navigatorChildItem]'
})
export class NavigatorChildItemDirective implements OnInit {

  @Input() childRouteIndex: number;
  @Output() navigated = new EventEmitter<string>();

  private childRoutes: RoutingModel;

  @HostListener('click')
  onMouseClick() {
    const route = this.childRoutes[this.childRouteIndex].path;
    this.navigated.emit(route);
    this.navigatorService.close();
  }

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {
    this.navigatorService.childRoutes
      .subscribe(data => {
        this.childRoutes = data;
      });
  }
}
