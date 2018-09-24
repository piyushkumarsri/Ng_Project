
import { NgModule } from '@angular/core';
import { BalloonGalleryComponent } from './balloon-gallery.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ShowroomOpningComponent } from './showroom-opning/showroom-opning.component';
import { FestivalComponent } from './festival/festival.component';
import { NationalFestivalComponent } from './national-festival/national-festival.component';
import { CulturalComponent } from './cultural/cultural.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes = [
    { path: "balloon-gallery", component: BalloonGalleryComponent },
    { path: "birthday", component: BirthdayComponent },
    { path: "national", component: NationalFestivalComponent },
    // { path: "balloon-gallery", component: BalloonGalleryComponent },
    // { path: "balloon-gallery", component: BalloonGalleryComponent },
];


@NgModule({
  declarations: [
   //NewComponentComponent,
    BalloonGalleryComponent,

    BirthdayComponent,
    WeddingComponent,
    ShowroomOpningComponent,
    FestivalComponent,
    NationalFestivalComponent,
    CulturalComponent,
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  //imports: [BrowserModule,BrowserAnimationsModule, RouterModule.forRoot(routes),
  providers: [],

})
export class BooloonGallaryModule { }
