import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetinationComponent } from './detination.component';

describe('DetinationComponent', () => {
  let component: DetinationComponent;
  let fixture: ComponentFixture<DetinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetinationComponent]
    });
    fixture = TestBed.createComponent(DetinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
