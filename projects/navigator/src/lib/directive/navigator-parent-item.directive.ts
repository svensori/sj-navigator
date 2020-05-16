import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

import { NavItem } from '../interface/nav-item';
import { NavigatorService } from '../navigator.service';

@Directive({
  selector: '[navigatorParentItem]'
})
export class NavigatorParentItemDirective implements OnInit, AfterViewInit {
  @Input() width: string;
  @Input() routeIndex: number;
  @Output() navigated = new EventEmitter<string>();

  private routes: NavItem[];

  @HostListener('mouseenter')
  onMouseEnter() {
    const childRoutes = this.routes[this.routeIndex]?.children;
    this.navigatorService.setChildRoutes(childRoutes);
    childRoutes ? this.navigatorService.open() : this.navigatorService.close();
  }

  @HostListener('click')
  onMouseClick() {
    this.navigated.emit(this.routes[this.routeIndex].path);
  }

  constructor(
    private el: ElementRef,
    private navigatorService: NavigatorService) { }

  ngOnInit(): void {
    this.navigatorService.routes.subscribe(data => {
      this.routes = data;
    });
  }

  ngAfterViewInit(): void {
    // console.log(this.el);
  }
}
