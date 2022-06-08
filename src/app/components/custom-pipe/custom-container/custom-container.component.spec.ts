import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalModule } from 'src/app/shared/global/global.module';
import { DarkModePipe } from 'src/app/shared/pipes/dark-mode.pipe';

import { CustomContainerComponent } from './custom-container.component';

describe('CustomContainerComponent', () => {
  let component: CustomContainerComponent;
  let fixture: ComponentFixture<CustomContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomContainerComponent],
      imports: [GlobalModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
