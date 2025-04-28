import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrashBinPage } from './trash-bin.page';

const routes: Routes = [
  {
    path: '',
    component: TrashBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrashBinPageRoutingModule {}
