import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NavigatorModule, NavigatorService, RoutingModel } from 'sj-navigator';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsComponent } from './components/components.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleasesComponent } from './dashboard/releases/releases.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';

const routingModel: RoutingModel = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    children: [
      {
        name: 'Releases',
        path: 'dashboard/releases'
      }
    ]
  },
  {
    name: 'Components',
    path: 'components',
    children: [
      {
        name: 'Sample Component',
        path: 'components/sample'
      }
    ]
  },
  {
    name: 'Profile',
    path: 'profile'
  },
  {
    name: 'Settings',
    path: 'settings',
    children: [
      {
        name: 'Account settings',
        path: 'settings/account'
      },
      {
        name: 'Privacy settings',
        path: 'settings/privacy'
      }
    ]
  },
  {
    name: 'FAQs',
    path: 'faq'
  }
];

const initializer = (navService: NavigatorService, http: HttpClient) =>
  () => navService.init(routingModel);

@NgModule({
   declarations: [
      AppComponent,
      SampleComponentComponent,
      DashboardComponent,
      ReleasesComponent,
      ComponentsComponent,
      SettingsComponent,
      FaqComponent,
      ProfileComponent
   ],
   imports: [
      BrowserModule,
      NavigatorModule,
      AppRoutingModule,
      HttpClientModule,
      MatToolbarModule,
      MatButtonModule
   ],
   providers: [
     {
       provide: APP_INITIALIZER,
       useFactory: initializer,
       deps: [
         NavigatorService,
         HttpClient
       ],
       multi: true
     }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
