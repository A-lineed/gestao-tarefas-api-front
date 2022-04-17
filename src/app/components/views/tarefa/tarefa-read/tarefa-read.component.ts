import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-tarefa-read',
  templateUrl: './tarefa-read.component.html',
  styleUrls: ['./tarefa-read.component.css']
})
export class TarefaReadComponent implements OnInit {

  tarefas: Tarefa[] = []

  displayedColumns: string[] = ['id', 'titulo', 'responsavel', 'data','descricao', 'acoes'];

  constructor(private service: TarefaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.tarefas = resposta;

    })
  }
  navegarParaTarefaCreate() {
    this.router.navigate(["tarefas/create"])
  }
  
  
}
