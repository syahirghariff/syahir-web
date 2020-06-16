import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEducationComponent } from './m-education.component';

describe('MEducationComponent', () => {
  let component: MEducationComponent;
  let fixture: ComponentFixture<MEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
