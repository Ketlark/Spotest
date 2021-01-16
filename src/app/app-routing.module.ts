import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./main/search.module').then(m => m.SearchModule) },
  { path: 'artist/:id', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },
  { path: 'album/:id', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
