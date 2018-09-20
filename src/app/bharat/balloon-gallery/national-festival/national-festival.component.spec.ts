import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalFestivalComponent } from './national-festival.component';

describe('NationalFestivalComponent', () => {
  let component: NationalFestivalComponent;
  let fixture: ComponentFixture<NationalFestivalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalFestivalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
