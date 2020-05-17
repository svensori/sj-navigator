import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatSidenavModule,
    MatRippleModule
  ],
  exports: [
    MatSidenavModule,
    MatRippleModule
  ],
})
export class NavigatorMaterialModule { }
