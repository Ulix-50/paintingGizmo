import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaintingRoomPage } from './painting-room.page';

const routes: Routes = [
  {
    path: '',
    component: PaintingRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaintingRoomPageRoutingModule {}
