import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './bharat/menu/menu.component';
import { FormsModule }   from '@angular/forms';
import {routes} from './app.routes';
import { RouterModule } from "@angular/router";
//import { NewComponentComponent } from './bharat/new-component/new-component.component';
// import { BalloonGalleryComponent } from './bharat/balloon-gallery/balloon-gallery.component';
import { CustomerComponent } from './bharat/customer/customer.component';
import { OccasionComponent } from './bharat/occasion/occasion.component';
import { HomeComponent } from './bharat/home/home.component';
// import { BirthdayComponent } from './bharat/balloon-gallery/birthday/birthday.component';
// import { WeddingComponent } from './bharat/balloon-gallery/wedding/wedding.component';
// import { ShowroomOpningComponent } from './bharat/balloon-gallery/showroom-opning/showroom-opning.component';
// import { FestivalComponent } from './bharat/balloon-gallery/festival/festival.component';
// import { NationalFestivalComponent } from './bharat/balloon-gallery/national-festival/national-festival.component';
// import { CulturalComponent } from './bharat/balloon-gallery/cultural/cultural.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //NewComponentComponent,
    // BalloonGalleryComponent,
    CustomerComponent,
    OccasionComponent,
    HomeComponent,
    // BirthdayComponent,
    // WeddingComponent,
    // ShowroomOpningComponent,
    // FestivalComponent,
    // NationalFestivalComponent,
    // CulturalComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  //imports: [BrowserModule,BrowserAnimationsModule, RouterModule.forRoot(routes),
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
