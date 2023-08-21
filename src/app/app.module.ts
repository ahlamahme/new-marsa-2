import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueHeadComponent } from './componant/blue-head/blue-head.component';
import { NavBarComponent } from './componant/nav-bar/nav-bar.component';
import { HeadCarouslComponent } from './componant/head-carousl/head-carousl.component';
import { FormsModule } from '@angular/forms';
import { RangLiderComponent } from './componant/rang-lider/rang-lider.component';
import { DetinationComponent } from './componant/detination/detination.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetinationCityComponent } from './componant/detination-city/detination-city.component';
import { CityTouComponent } from './componant/city-tou/city-tou.component';
import { OffersComponent } from './componant/offers/offers.component';
import { LiveboardComponent } from './componant/liveboard/liveboard.component';
import { AccomodationComponent } from './componant/accomodation/accomodation.component';
import { ClintsComponent } from './componant/clints/clints.component';
import { FooterComponent } from './componant/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BlueHeadComponent,
    NavBarComponent,
    HeadCarouslComponent,
    RangLiderComponent,
    DetinationComponent,
    DetinationCityComponent,
    CityTouComponent,
    OffersComponent,
    LiveboardComponent,
    AccomodationComponent,
    ClintsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
