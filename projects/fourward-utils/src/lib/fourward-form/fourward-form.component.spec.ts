import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourwardFormComponent } from './fourward-form.component';

describe('FourwardFormComponent', () => {
  let component: FourwardFormComponent;
  let fixture: ComponentFixture<FourwardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourwardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourwardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
