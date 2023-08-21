import { Component } from '@angular/core';

@Component({
  selector: 'app-head-carousl',
  templateUrl: './head-carousl.component.html',
  styleUrls: ['./head-carousl.component.scss']
})
export class HeadCarouslComponent {

  selectedOption1: string = '';
  selectedOption2: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  things: string[] = ['Option 1', 'Option 2', 'Option 3'];
}
