import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent {

  slidesStore = [
    {image: '../../../assets/img/a-3.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/a-3.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/a-4.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/a-3.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image:  '../../../assets/img/a-4.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
  ];

  customOptions: OwlOptions = {
    loop: true,
    nav:true,
    navText: [ '<i class=" fa fa-chevron-left"></i>', '<i class=" fa fa-chevron-right"></i>' ],
    merge:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 4,
        margin:50,
      },
      400: {
        items: 4,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      }
    },
   margin:30,
    stagePadding:30,
  }
}
