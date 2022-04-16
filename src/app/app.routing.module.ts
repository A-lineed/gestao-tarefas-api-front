import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { TarefaReadComponent } from './components/views/tarefa/tarefa-read/tarefa-read.component';


const routes: Routes = [
 {
    path: '',
    component: HomeComponent
 },
 {
   path: 'tarefas',
   component: TarefaReadComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }