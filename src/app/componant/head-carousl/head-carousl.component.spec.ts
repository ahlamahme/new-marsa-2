import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCarouslComponent } from './head-carousl.component';

describe('HeadCarouslComponent', () => {
  let component: HeadCarouslComponent;
  let fixture: ComponentFixture<HeadCarouslComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadCarouslComponent]
    });
    fixture = TestBed.createComponent(HeadCarouslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
