import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { FullInfoComponent } from './components/full-info/full-info.component';
import { HistoryComponent } from './components/history/history.component';
import { ArchComponent } from './components/arch/arch.component';
import { AdInfoComponent } from './components/ad-info/ad-info.component';
import { AbAuComponent } from './components/ab-au/ab-au.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    
    HomeComponent,
    PicturesComponent,
    FullInfoComponent,
    HistoryComponent,
    ArchComponent,
    AdInfoComponent,
    AbAuComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }