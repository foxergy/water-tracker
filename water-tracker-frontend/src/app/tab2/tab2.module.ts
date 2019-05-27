import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { TabsPageModule } from '../tabs/tabs.module';
import { DrinkService } from 'src/service/drink-service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageModule
  ],
  providers:[DrinkService],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
