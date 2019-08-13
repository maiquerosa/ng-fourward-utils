import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfuFormDocComponent } from './nfu-form-doc.component';

describe('NfuFormDocComponent', () => {
  let component: NfuFormDocComponent;
  let fixture: ComponentFixture<NfuFormDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfuFormDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfuFormDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
