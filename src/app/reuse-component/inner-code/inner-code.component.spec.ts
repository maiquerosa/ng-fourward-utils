import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCodeComponent } from './inner-code.component';

describe('InnerCodeComponent', () => {
  let component: InnerCodeComponent;
  let fixture: ComponentFixture<InnerCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
