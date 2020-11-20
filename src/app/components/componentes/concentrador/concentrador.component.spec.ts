import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentradorComponent } from './concentrador.component';

describe('ConcentradorComponent', () => {
  let component: ConcentradorComponent;
  let fixture: ComponentFixture<ConcentradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcentradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
