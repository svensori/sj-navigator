import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NavigatorService } from '../../navigator.service';

@Component({
  selector: 'sj-nav-sub-routes',
  templateUrl: './sub-routes.component.html',
  styleUrls: ['./sub-routes.component.scss']
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
