import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-city-tou',
  templateUrl: './city-tou.component.html',
  styleUrls: ['./city-tou.component.scss']
})
export class CityTouComponent {
  slidesStore2 = [
    {image: '../../../assets/img/1.jpg'},
    {image: '../../../assets/img/2.jpg'},
    {image: '../../../assets/img/3.jpg'},
    {image: '../../../assets/img/4.jpg'},
    {image: '../../../assets/img/1.jpg'},
    {image:'../../../assets/img/3.jpg'},
    {image: '../../../assets/img/2.jpg'},
    {image: '../../../assets/img/4.jpg'},
    {image: '../../../assets/img/2.jpg'},
    
  ];
  slidesStore = [
    {image: '../../../assets/img/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/diving.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/divingfish.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/divingfish.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image:  '../../../assets/img/diving.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../../assets/img/divingfish.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
  ];


  customOptions: OwlOptions = {
    
    loop: true,
    navText: ['',''],
    merge:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    
    responsive: {
      0: {
        items: 1,
        margin:50,
       
      },
      400: {
        items: 1,  
      },
      740: {
        items: 2
      },
      940: {
        items: 3,  
      }
    },
    nav: false, 
   margin:50,
    stagePadding:30,
  }
  


}
