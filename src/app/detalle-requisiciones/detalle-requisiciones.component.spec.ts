import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRequisicionesComponent } from './detalle-requisiciones.component';

describe('DetalleRequisicionesComponent', () => {
  let component: DetalleRequisicionesComponent;
  let fixture: ComponentFixture<DetalleRequisicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleRequisicionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRequisicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
