import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FourwardInputMaskComponent } from './fourward-input-mask.component';

describe('FourwardInputMaskComponent', () => {
  let component: FourwardInputMaskComponent;
  let fixture: ComponentFixture<FourwardInputMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FourwardInputMaskComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourwardInputMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
