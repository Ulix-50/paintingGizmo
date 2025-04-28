import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebugPagePage } from './debug-page.page';

const routes: Routes = [
  {
    path: '',
    component: DebugPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebugPagePageRoutingModule {}
