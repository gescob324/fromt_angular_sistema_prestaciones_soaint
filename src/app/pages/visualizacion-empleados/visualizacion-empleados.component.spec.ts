import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionEmpleadosComponent } from './visualizacion-empleados.component';

describe('VisualizacionEmpleadosComponent', () => {
  let component: VisualizacionEmpleadosComponent;
  let fixture: ComponentFixture<VisualizacionEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacionEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
