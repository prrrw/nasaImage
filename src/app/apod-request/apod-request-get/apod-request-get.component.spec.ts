import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodRequestGetComponent } from './apod-request-get.component';

describe('ApodRequestGetComponent', () => {
  let component: ApodRequestGetComponent;
  let fixture: ComponentFixture<ApodRequestGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodRequestGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodRequestGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
