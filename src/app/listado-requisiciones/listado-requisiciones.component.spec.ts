import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRequisicionesComponent } from './listado-requisiciones.component';

describe('ListadoRequisicionesComponent', () => {
  let component: ListadoRequisicionesComponent;
  let fixture: ComponentFixture<ListadoRequisicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRequisicionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRequisicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
