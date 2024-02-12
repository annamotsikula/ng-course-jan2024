import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoutingComponentComponent } from './child-routing-component.component';

describe('ChildRoutingComponentComponent', () => {
  let component: ChildRoutingComponentComponent;
  let fixture: ComponentFixture<ChildRoutingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildRoutingComponentComponent]
    });
    fixture = TestBed.createComponent(ChildRoutingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
