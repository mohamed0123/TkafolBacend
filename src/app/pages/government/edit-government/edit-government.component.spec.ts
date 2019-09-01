import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGovernmentComponent } from './edit-government.component';

describe('EditGovernmentComponent', () => {
  let component: EditGovernmentComponent;
  let fixture: ComponentFixture<EditGovernmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGovernmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
