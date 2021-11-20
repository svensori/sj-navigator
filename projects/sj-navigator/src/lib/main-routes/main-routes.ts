import { AfterViewInit, Component, Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NavigatorService } from '../navigator-service';
import { RoutingModel } from '../navigator-types';

@Component({
  selector: 'sj-nav-main-routes',
  templateUrl: './main-routes.html',
  styleUrls: ['./main-routes.scss']
})
export class MainRoutesComponent implements OnInit {

  @Output() navigated = new EventEmitter<string>();
  routes = this.navigatorService.routes;

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() { }

  navigate(route: string) {
    this.navigated.emit(route);
  }
}

@Directive({
  selector: '[navigatorParentItem]'
})
export class NavigatorParentItemDirective implements OnInit, AfterViewInit {
  @Input() width: string;
  @Input() routeIndex: number;
  @Output() navigated = new EventEmitter<string>();

  private routes: RoutingModel;

  @HostListener('mouseenter')
  onMouseEnter() {
    const childRoutes = this.routes[this.routeIndex]?.children;
    this.navigatorService.setChildRoutes(childRoutes);
    childRoutes ? this.navigatorService.getSideNavInstance().open() : this.navigatorService.getSideNavInstance().close();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.navigatorService.getSideNavInstance().close();
  }

  @HostListener('click')
  onMouseClick() {
    this.navigated.emit(this.routes[this.routeIndex].path);
    this.navigatorService.getSideNavInstance().close();
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
    console.log(this.el.nativeElement);
  }
}

