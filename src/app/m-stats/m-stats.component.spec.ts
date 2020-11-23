import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MStatsComponent } from './m-stats.component';

describe('MStatsComponent', () => {
  let component: MStatsComponent;
  let fixture: ComponentFixture<MStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
