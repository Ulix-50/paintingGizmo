import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebugPagePageRoutingModule } from './debug-page-routing.module';

import { DebugPagePage } from './debug-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebugPagePageRoutingModule
  ],
  declarations: [DebugPagePage]
})
export class DebugPagePageModule {}
