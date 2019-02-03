import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroJogadorComponent } from './cadastro-jogador/cadastro-jogador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './generic.service';
import { ListaJogadorComponent } from './lista-jogador/lista-jogador.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroJogadorComponent,
    ListaJogadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
