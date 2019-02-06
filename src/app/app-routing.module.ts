import { CadastroTimesComponent } from './cadastro-times/cadastro-times.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemTimesComponent } from './listagem-times/listagem-times.component';
import { CadastroJogadorComponent } from './jogador/cadastro-jogador/cadastro-jogador.component';
import { ListaJogadorComponent } from './jogador/lista-jogador/lista-jogador.component';

const routes: Routes = [
  
  {path:'dashboard', component: DashboardComponent},
  {path: 'listar-time', component: ListagemTimesComponent},
  {path:'cadastrar-time', component: CadastroTimesComponent},
  {path: 'cadastrar-jogador', component: CadastroJogadorComponent},
  {path: 'listar-jogadores', component: ListaJogadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
