import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { TarefaCreateComponent } from './components/views/tarefa/tarefa-create/tarefa-create.component';
import { TarefaDeleteComponent } from './components/views/tarefa/tarefa-delete/tarefa-delete.component';
import { TarefaReadComponent } from './components/views/tarefa/tarefa-read/tarefa-read.component';
import { TarefaUpdateComponent } from './components/views/tarefa/tarefa-update/tarefa-update.component';


const routes: Routes = [
 {
    path: '',
    component: HomeComponent
 },
 {
   path: 'tarefa',
   component: TarefaReadComponent
 },
 {
   path: 'tarefa/create',
   component: TarefaCreateComponent
 },
 {
  path: 'tarefa/delete/:id',
  component: TarefaDeleteComponent
},
{
  path: 'tarefa/update/:id',
  component: TarefaUpdateComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }