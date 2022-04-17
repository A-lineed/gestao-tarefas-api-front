import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-delete',
  templateUrl: './tarefa-delete.component.html',
  styleUrls: ['./tarefa-delete.component.css']
})
export class TarefaDeleteComponent implements OnInit {

  tarefa: Tarefa = {
    titulo: '',
    responsavel: '',
    descricao:'',
    prioridade:'',
    deadline:''
  }

  constructor(private service: TarefaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.tarefa.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.tarefa.id!).subscribe((resposta) => {
      this.tarefa.titulo = resposta.titulo
      this.tarefa.responsavel = resposta.responsavel
      this.tarefa.descricao = resposta.descricao
      this.tarefa.prioridade = resposta.prioridade
      this.tarefa.deadline = resposta.deadline
    })
  }

  delete(): void {
    this.service.delete(this.tarefa.id!).subscribe((resposta) => {
      this.router.navigate(['tarefa'])
      this.service.mensagem('Tarefa deletada com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['tarefa'])
  }

}
