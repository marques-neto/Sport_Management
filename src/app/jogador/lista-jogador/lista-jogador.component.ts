import { JogadorService } from '../service/jogador.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-jogador',
  templateUrl: './lista-jogador.component.html',
  styleUrls: ['./lista-jogador.component.css'],
  providers: [JogadorService]
})
export class ListaJogadorComponent implements OnInit {


  listaJogadores=[]
  userFilter : any ={ nome:'' }
  jogadorSelecionado: any

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

  consulta(index){
    this.jogadorSelecionado = this.listaJogadores[index]
  }
}
