import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProdutosComponent } from './listagem-produtos.component';

describe('ListagemProdutosComponent', () => {
  let component: ListagemProdutosComponent;
  let fixture: ComponentFixture<ListagemProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
