import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionesComponent } from './conversiones.component';

describe('ConversionesComponent', () => {
  let component: ConversionesComponent;
  let fixture: ComponentFixture<ConversionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
