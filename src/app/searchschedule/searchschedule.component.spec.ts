import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchscheduleComponent } from './searchschedule.component';

describe('SearchscheduleComponent', () => {
  let component: SearchscheduleComponent;
  let fixture: ComponentFixture<SearchscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
