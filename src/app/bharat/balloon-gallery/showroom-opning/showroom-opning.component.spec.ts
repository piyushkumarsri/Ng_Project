import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowroomOpningComponent } from './showroom-opning.component';

describe('ShowroomOpningComponent', () => {
  let component: ShowroomOpningComponent;
  let fixture: ComponentFixture<ShowroomOpningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowroomOpningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowroomOpningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
