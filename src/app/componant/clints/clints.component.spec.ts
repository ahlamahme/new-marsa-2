import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintsComponent } from './clints.component';

describe('ClintsComponent', () => {
  let component: ClintsComponent;
  let fixture: ComponentFixture<ClintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClintsComponent]
    });
    fixture = TestBed.createComponent(ClintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
