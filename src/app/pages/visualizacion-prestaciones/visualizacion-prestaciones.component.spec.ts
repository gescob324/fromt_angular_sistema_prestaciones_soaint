import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionPrestacionesComponent } from './visualizacion-prestaciones.component';

describe('VisualizacionPrestacionesComponent', () => {
  let component: VisualizacionPrestacionesComponent;
  let fixture: ComponentFixture<VisualizacionPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacionPrestacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
