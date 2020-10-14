import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTechComponent } from './m-tech.component';

describe('MTechComponent', () => {
  let component: MTechComponent;
  let fixture: ComponentFixture<MTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
