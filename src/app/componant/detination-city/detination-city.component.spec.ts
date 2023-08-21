import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetinationCityComponent } from './detination-city.component';

describe('DetinationCityComponent', () => {
  let component: DetinationCityComponent;
  let fixture: ComponentFixture<DetinationCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetinationCityComponent]
    });
    fixture = TestBed.createComponent(DetinationCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
