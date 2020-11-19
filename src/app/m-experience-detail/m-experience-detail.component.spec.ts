import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MExperienceDetailComponent } from './m-experience-detail.component';

describe('MExperienceDetailComponent', () => {
  let component: MExperienceDetailComponent;
  let fixture: ComponentFixture<MExperienceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MExperienceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MExperienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
