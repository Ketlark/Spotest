import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { SearchPageRouting } from './search-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, SearchPageRouting],
  declarations: [SearchPage]
})
export class SearchModule {}