import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListagemTimesComponent } from './listagem-times/listagem-times.component';
import { CadastroTimesComponent } from './cadastro-times/cadastro-times.component';
import { FilterPipeModule } from 'ngx-filter-pipe';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Service } from './generic.service';
import { CadastroJogadorComponent } from './jogador/cadastro-jogador/cadastro-jogador.component';
import { ListaJogadorComponent } from './jogador/lista-jogador/lista-jogador.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroJogadorComponent,
    ListaJogadorComponent,
    DashboardComponent,
    ListagemTimesComponent,
    CadastroTimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
