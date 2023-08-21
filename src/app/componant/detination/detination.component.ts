import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detination',
  templateUrl: './detination.component.html',
  styleUrls: ['./detination.component.scss']
})
export class DetinationComponent {

  qusir_paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
   totam rem aperiam, e dicta sunt explicabo unde omnis iste natus error sit voluptatem accusantium doloremque`;
   safagaa_paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
   totam rem aperiam unde omnis iste natus error sit voluptatem accusantium doloremque`;
   
   images: [string, string, string][] = [
    [this.qusir_paragraph, '../../../assets/img/ship.jpg','qusier'],
    [this.safagaa_paragraph, '../../../assets/img/diving.jpg','safagaa'],
    [this.qusir_paragraph, '../../../assets/img/dolphn.jpg','port gharab']
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [ '<i class=" fa fa-chevron-left"></i>', '<i class=" fa fa-chevron-right"></i>' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    margin:0,
  }
  
  // currentIndex = 0;

  // nextSlide(): void {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  // }
  // prevSlide(): void {
  //   this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; 
  // }

}


