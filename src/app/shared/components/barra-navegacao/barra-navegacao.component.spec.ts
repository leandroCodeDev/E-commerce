import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacaoComponent } from './barra-navegacao.component';

describe('BarraNavegacaoComponent', () => {
  let component: BarraNavegacaoComponent;
  let fixture: ComponentFixture<BarraNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraNavegacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
