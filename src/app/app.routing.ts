import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { SampleComponentComponent } from './components/sample-component/sample-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleasesComponent } from './dashboard/releases/releases.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './settings/account/account.component';
import { PrivacyComponent } from './settings/privacy/privacy.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'releases',
        component: ReleasesComponent
      }
    ]
  },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      {
        path: 'sample',
        component: SampleComponentComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      }
    ]
  },
  {
    path: 'faq',
    component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
