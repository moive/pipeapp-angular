import { ComponentFixture, TestBed } from '@angular/core/testing';
import localeEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';

import { NumberComponent } from './number.component';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;

  beforeEach(async () => {
    registerLocaleData(localeEsPe, 'es-PE');
    await TestBed.configureTestingModule({
      declarations: [NumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
