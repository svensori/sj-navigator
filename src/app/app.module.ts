import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigatorModule } from '@sj/navigator';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleasesComponent } from './releases/releases.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
   declarations: [
      AppComponent,
      SampleComponentComponent,
      DashboardComponent,
      ReleasesComponent,
      ComponentsComponent
   ],
   imports: [
      BrowserModule,
      NavigatorModule,
      AppRoutingModule,
      HttpClientModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
