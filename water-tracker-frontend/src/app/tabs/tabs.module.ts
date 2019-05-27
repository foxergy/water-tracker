import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs.page';
import { RouterModule } from '@angular/router';
import { WelcomeCardComponent } from '../welcome-card/welcome-card.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [TabsPage, WelcomeCardComponent],
  exports: [TabsPage, WelcomeCardComponent]
})
export class TabsPageModule {}
