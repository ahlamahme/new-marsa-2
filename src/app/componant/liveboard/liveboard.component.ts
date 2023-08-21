import { Component } from '@angular/core';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.scss']
})
export class LiveboardComponent {

  cards = [
    {
      imageUrl: '../../../assets/img/ship.jpg',
      title: 'LIVEABOARD SATAYA DOLPHIN HOUSE',
      description: 'Marsa ALAM'
    },
    {
      imageUrl: '../../../assets/img/ship.jpg',
      title: 'LIVEABOARD SATAYA DOLPHIN HOUSE',
      description: 'Marsa ALAM'
    },
    {
      imageUrl: '../../../assets/img/ship.jpg',
      title: 'LIVEABOARD SATAYA DOLPHIN HOUSE',
      description: 'Marsa ALAM'
    }
  ];
}
