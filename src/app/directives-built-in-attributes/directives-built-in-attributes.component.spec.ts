import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesBuiltInAttributesComponent } from './directives-built-in-attributes.component';

describe('DirectivesBuiltInAttributesComponent', () => {
  let component: DirectivesBuiltInAttributesComponent;
  let fixture: ComponentFixture<DirectivesBuiltInAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesBuiltInAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesBuiltInAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
