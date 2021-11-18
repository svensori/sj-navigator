import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainRoutesComponent, NavigatorParentItemDirective } from './main-routes/main-routes';
import { NavigatorComponent } from './navigator';
import { NavigatorMaterialModule } from './navigator-material-module';
import { NavigatorService } from './navigator-service';
import { NavigatorChildItemDirective, SubRoutesComponent } from './sub-routes/sub-routes';

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
