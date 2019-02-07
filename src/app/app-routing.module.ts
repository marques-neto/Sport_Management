import { CadastroTimesComponent } from './cadastro-times/cadastro-times.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemTimesComponent } from './listagem-times/listagem-times.component';
import { CadastroJogadoresComponent } from './cadastro-jogadores/cadastro-jogadores.component';
import { ListagemJogadoresComponent } from './listagem-jogadores/listagem-jogadores.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path: 'listar-time', component: ListagemTimesComponent},
  {path:'cadastrar-time', component: CadastroTimesComponent},
  {path:'cadastrar-jogador', component: CadastroJogadoresComponent},
  {path:'listar-jogador', component: ListagemJogadoresComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
