import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MExperienceComponent } from './m-experience.component';

describe('MExperienceComponent', () => {
  let component: MExperienceComponent;
  let fixture: ComponentFixture<MExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
