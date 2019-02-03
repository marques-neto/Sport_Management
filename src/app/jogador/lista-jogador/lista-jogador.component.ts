import { JogadorService } from '../service/jogador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-jogador',
  templateUrl: './lista-jogador.component.html',
  styleUrls: ['./lista-jogador.component.css'],
  providers: [JogadorService]
})
export class ListaJogadorComponent implements OnInit {


  listaJogadores=[]

  constructor(private service: JogadorService) { }

  ngOnInit() {
    this.consultaJogadores();
  }

  consultaJogadores(){
    this.service.getAll()
      .subscribe(response => {
        this.listaJogadores = response
        console.log(response)
      }, error => console.log(error))
  }

}
