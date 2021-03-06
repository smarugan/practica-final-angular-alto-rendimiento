import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusPageComponent } from './status-page.component';

const routes: Routes = [
  {
    path: 'status-page/:id/:name',
    component: StatusPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatusRoutingModule {}
