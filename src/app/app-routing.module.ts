import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import { HomeComponent } from './components/home/home.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { FullInfoComponent } from './components/full-info/full-info.component';
import { HistoryComponent } from './components/history/history.component';
import { ArchComponent } from './components/arch/arch.component';
import { AdInfoComponent } from './components/ad-info/ad-info.component';
import { AbAuComponent } from './components/ab-au/ab-au.component';
import { BackComponent } from './components/back/back.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  
  { path: 'pictures', component: PicturesComponent },
  { path: 'full-info', component: FullInfoComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'arch', component: ArchComponent },
  { path: 'ad-info', component: AdInfoComponent },
  { path: 'ab-au', component: AbAuComponent },
  { path: 'back', component: BackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
