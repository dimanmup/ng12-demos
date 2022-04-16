import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesBuiltInStructuralComponent } from './directives-built-in-structural.component';

describe('DirectivesBuiltInStructuralComponent', () => {
  let component: DirectivesBuiltInStructuralComponent;
  let fixture: ComponentFixture<DirectivesBuiltInStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesBuiltInStructuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesBuiltInStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
