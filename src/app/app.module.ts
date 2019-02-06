import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListagemTimesComponent } from './listagem-times/listagem-times.component';
import { CadastroTimesComponent } from './cadastro-times/cadastro-times.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ListagemJogadoresComponent } from './listagem-jogadores/listagem-jogadores.component';
import { CadastroJogadoresComponent } from './cadastro-jogadores/cadastro-jogadores.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListagemTimesComponent,
    CadastroTimesComponent,
    ListagemJogadoresComponent,
    CadastroJogadoresComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule
    
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
