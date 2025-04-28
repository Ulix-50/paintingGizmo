import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaintingRoomPageRoutingModule } from './painting-room-routing.module';

import { PaintingRoomPage } from './painting-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaintingRoomPageRoutingModule
  ],
  declarations: [PaintingRoomPage]
})
export class PaintingRoomPageModule {}
