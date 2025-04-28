import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'debug-page',
    loadChildren: () => import('./debug-page/debug-page.module').then( m => m.DebugPagePageModule)
  },
  {
    path: 'painting-room',
    loadChildren: () => import('./painting-room/painting-room.module').then( m => m.PaintingRoomPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'trash-bin',
    loadChildren: () => import('./trash-bin/trash-bin.module').then( m => m.TrashBinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
