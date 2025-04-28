import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrashBinPageRoutingModule } from './trash-bin-routing.module';

import { TrashBinPage } from './trash-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrashBinPageRoutingModule
  ],
  declarations: [TrashBinPage]
})
export class TrashBinPageModule {}
