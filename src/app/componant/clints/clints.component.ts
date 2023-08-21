import { Component } from '@angular/core';

@Component({
  selector: 'app-clints',
  templateUrl: './clints.component.html',
  styleUrls: ['./clints.component.scss']
})
export class ClintsComponent {
  cards = [
    { image: '../../../assets/img/ahmed.png', title: 'Card 1', content: '“ I enjoyed a lot with you, as it was an enjoyable trip on the sea ,diving, horse riding “.' },
    { image: '../../../assets/img/ahmed.png', title: 'Card 2', content: '“ I enjoyed a lot with you, as it was an enjoyable trip on the sea ,diving, horse riding “.' },
   
  ];
}
