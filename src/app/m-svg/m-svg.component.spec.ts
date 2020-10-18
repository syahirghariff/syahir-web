import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSvgComponent } from './m-svg.component';

describe('MSvgComponent', () => {
  let component: MSvgComponent;
  let fixture: ComponentFixture<MSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
