import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePipesComponent } from './example-pipes.component';

describe('ExamplePipesComponent', () => {
  let component: ExamplePipesComponent;
  let fixture: ComponentFixture<ExamplePipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplePipesComponent]
    });
    fixture = TestBed.createComponent(ExamplePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
