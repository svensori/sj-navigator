import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleasesComponent } from './releases/releases.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';

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
        path: 'a',
        component: SampleComponentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
