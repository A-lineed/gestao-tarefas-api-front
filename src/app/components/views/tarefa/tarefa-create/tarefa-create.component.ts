import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-create',
  templateUrl: './tarefa-create.component.html',
  styleUrls: ['./tarefa-create.component.css']
})
export class TarefaCreateComponent implements OnInit {

  tarefa: Tarefa = {
    titulo: '',
    responsavel: '',
    descricao:''
  }

  constructor(private service: TarefaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.tarefa).subscribe((resposta) => {
      this.router.navigate(['tarefa'])
      this.service.mensagem('tarefa criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['tarefa'])
  }

}
