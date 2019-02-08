
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroJogadorComponent } from './jogador/cadastro-jogador/cadastro-jogador.component';
import { ListaJogadorComponent } from './jogador/lista-jogador/lista-jogador.component';
import { ListagemTimesComponent } from './time/listagem-times/listagem-times.component';
import { CadastroTimesComponent } from './time/cadastro-times/cadastro-times.component';

const routes: Routes = [
  
  {path:'', redirectTo:'app-dashboard', pathMatch:'full'},
  {path: 'app-dashboard', component: DashboardComponent},
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
