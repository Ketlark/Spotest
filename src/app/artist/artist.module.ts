import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtistPage } from './artist.page';
import { ArtistPageRouting } from './artist-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ArtistPageRouting],
  declarations: [ArtistPage]
})
export class ArtistModule {}