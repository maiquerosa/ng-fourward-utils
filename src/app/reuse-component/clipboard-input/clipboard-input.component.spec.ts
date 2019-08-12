import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardInputComponent } from './clipboard-input.component';

describe('ClipboardInputComponent', () => {
  let component: ClipboardInputComponent;
  let fixture: ComponentFixture<ClipboardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClipboardInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
