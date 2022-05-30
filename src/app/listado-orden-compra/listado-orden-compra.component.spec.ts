import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoOrdenCompraComponent } from './listado-orden-compra.component';

describe('ListadoOrdenCompraComponent', () => {
  let component: ListadoOrdenCompraComponent;
  let fixture: ComponentFixture<ListadoOrdenCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoOrdenCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoOrdenCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
