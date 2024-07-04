import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillsComponent } from './pills.component';

describe('PillsComponent', () => {
  let component: PillsComponent;
  let fixture: ComponentFixture<PillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PillsComponent]
    });
    fixture = TestBed.createComponent(PillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
