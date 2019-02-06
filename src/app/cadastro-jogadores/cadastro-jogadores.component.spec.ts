import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroJogadoresComponent } from './cadastro-jogadores.component';

describe('CadastroJogadoresComponent', () => {
  let component: CadastroJogadoresComponent;
  let fixture: ComponentFixture<CadastroJogadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroJogadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
