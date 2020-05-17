import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MainRoutesComponent } from './components/main-routes/main-routes.component';
import { SubRoutesComponent } from './components/sub-routes/sub-routes.component';
import { NavigatorChildItemDirective } from './directive/navigator-child-item.directive';
import { NavigatorParentItemDirective } from './directive/navigator-parent-item.directive';
import { NavigatorMaterialModule } from './navigator-material.module';
import { NavigatorComponent } from './navigator.component';
import { NavigatorService } from './navigator.service';

@NgModule({
  declarations: [
    NavigatorComponent,
    MainRoutesComponent,
    SubRoutesComponent,
    NavigatorParentItemDirective,
    NavigatorChildItemDirective
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    NavigatorMaterialModule,
    RouterModule
  ],
  exports: [
    BrowserAnimationsModule,
    NavigatorComponent
  ],
  providers: [NavigatorService]
})
export class NavigatorModule { }
