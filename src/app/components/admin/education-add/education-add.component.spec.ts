import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAddComponent } from './education-add.component';

describe('EducationAddComponent', () => {
  let component: EducationAddComponent;
  let fixture: ComponentFixture<EducationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
