import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkService } from 'src/service/drink-service';
import { Tab3PageModule } from './tab3/tab3.module';
import { Tab2PageModule } from './tab2/tab2.module';
import { Tab1PageModule } from './tab1/tab1.module';
import { HttpClientModule } from '@angular/common/http';
import { TabsPageModule } from './tabs/tabs.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    HttpClientModule,
    IonicModule.forRoot(), 
    RouterModule,
    AppRoutingModule,
    TabsPageModule,
    Tab1PageModule,
    Tab2PageModule,
    Tab3PageModule],
  providers: [
    StatusBar,
    SplashScreen,
    DrinkService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
