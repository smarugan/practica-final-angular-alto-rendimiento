import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusPageComponent } from './status-page.component';

const routes: Routes = [
  {
    path: 'status-page/:name',
    component: StatusPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    StatusPageComponent
  ],
  exports: [
    RouterModule
  ]
})
export class StatusRoutingModule {}
