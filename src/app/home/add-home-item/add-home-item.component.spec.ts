import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeItemComponent } from './add-home-item.component';

describe('AddHomeItemComponent', () => {
  let component: AddHomeItemComponent;
  let fixture: ComponentFixture<AddHomeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHomeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
