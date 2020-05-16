import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

import { NavItem } from './interface/nav-item';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  get routes() {
    return this._routes.asObservable();
  }

  get childRoutes() {
    return this._childRoutes.asObservable();
  }

  private _sideNav: MatSidenav;
  private _routes = new BehaviorSubject<NavItem[]>(undefined);
  private _childRoutes = new BehaviorSubject<NavItem[]>(undefined);

  constructor() { }

  init(navModel: NavItem[]) {
    this._routes.next(navModel);
  }

  setSideNav(sideNav: MatSidenav) {
    this._sideNav = sideNav;
  }

  setChildRoutes(childRoutes: NavItem[]) {
    this._childRoutes.next(childRoutes);
  }

  /**
   * Mat Side Nav Exposed APIs
   */
  open() {
    this._sideNav.open();
  }

  close() {
    this._sideNav.close();
  }
}
