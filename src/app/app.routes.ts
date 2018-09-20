import { BalloonGalleryComponent } from "./bharat/balloon-gallery/balloon-gallery.component";
import { MenuComponent } from "./bharat/menu/menu.component";
import { CustomerComponent } from "./bharat/customer/customer.component";
import { OccasionComponent } from "./bharat/occasion/occasion.component";
import { HomeComponent } from "./bharat/home/home.component";

export const routes = [
    {path:"",redirectTo:"home",pathMatch:"full" },
    { path: "menu", component: MenuComponent },
    { path: "balloon-gallery", component: BalloonGalleryComponent },
    { path: "customer", component: CustomerComponent },
    {path: "occasion", component: OccasionComponent },
    {path: "home", component: HomeComponent }
  ];