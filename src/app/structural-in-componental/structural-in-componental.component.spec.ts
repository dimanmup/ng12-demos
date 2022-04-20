import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralInComponentalComponent } from './structural-in-componental.component';

describe('StructuralInComponentalComponent', () => {
  let component: StructuralInComponentalComponent;
  let fixture: ComponentFixture<StructuralInComponentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralInComponentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralInComponentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
