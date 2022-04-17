import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { TarefaCreateComponent } from './components/views/tarefa/tarefa-create/tarefa-create.component';
import { TarefaReadComponent } from './components/views/tarefa/tarefa-read/tarefa-read.component';


const routes: Routes = [
 {
    path: '',
    component: HomeComponent
 },
 {
   path: 'tarefas',
   component: TarefaReadComponent
 },
 {
   path: 'tarefas/create',
   component: TarefaCreateComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }