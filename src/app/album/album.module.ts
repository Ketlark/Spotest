import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumPage } from './album.page';
import { AlbumPageRouting } from './album-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AlbumPageRouting
  ],
  declarations: [AlbumPage]
})
export class AlbumModule {}