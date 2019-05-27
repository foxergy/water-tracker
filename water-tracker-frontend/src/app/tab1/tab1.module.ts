import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { DrinkService } from 'src/service/drink-service';
import { TabsPageModule } from '../tabs/tabs.module';
import { WelcomeCardComponent } from '../welcome-card/welcome-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageModule
  ],
  providers:[DrinkService],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
