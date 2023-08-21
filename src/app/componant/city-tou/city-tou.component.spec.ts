import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTouComponent } from './city-tou.component';

describe('CityTouComponent', () => {
  let component: CityTouComponent;
  let fixture: ComponentFixture<CityTouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityTouComponent]
    });
    fixture = TestBed.createComponent(CityTouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
