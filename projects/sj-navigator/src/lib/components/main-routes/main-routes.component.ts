import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavigatorService } from '../../navigator.service';

@Component({
  selector: 'sj-nav-main-routes',
  templateUrl: './main-routes.component.html',
  styleUrls: ['./main-routes.component.scss']
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
