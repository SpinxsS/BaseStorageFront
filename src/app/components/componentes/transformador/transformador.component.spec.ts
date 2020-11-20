import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformadorComponent } from './transformador.component';

describe('TransformadorComponent', () => {
  let component: TransformadorComponent;
  let fixture: ComponentFixture<TransformadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransformadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
