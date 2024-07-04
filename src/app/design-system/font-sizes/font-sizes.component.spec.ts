import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizesComponent } from './font-sizes.component';

describe('FontSizesComponent', () => {
  let component: FontSizesComponent;
  let fixture: ComponentFixture<FontSizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FontSizesComponent]
    });
    fixture = TestBed.createComponent(FontSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
