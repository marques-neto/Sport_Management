import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemJogadoresComponent } from './listagem-jogadores.component';

describe('ListagemJogadoresComponent', () => {
  let component: ListagemJogadoresComponent;
  let fixture: ComponentFixture<ListagemJogadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemJogadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
