import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavigatorModule, NavigatorService, RoutingModel } from 'sj-navigator';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleasesComponent } from './releases/releases.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';

const routingModel: RoutingModel = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    children: [{
        name: 'Releases',
        path: 'dashboard/releases'
      }
    ]
  }
];

const initializer = (navService: NavigatorService) => () => navService.init(routingModel);

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
   providers: [
     {
       provide: APP_INITIALIZER,
       useFactory: initializer,
       deps: [
         NavigatorService
       ],
       multi: true
     }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
