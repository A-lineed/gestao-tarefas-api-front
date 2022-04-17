import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Tarefa[]> {
    const url = `${this.baseUrl}/tarefa`
    return this.http.get<Tarefa[]>(url)
  }

  findById(id: String): Observable<Tarefa> {
    const url = `${this.baseUrl}/tarefa/${id}`
    return this.http.get<Tarefa>(url)
  }

  create(tarefa: Tarefa): Observable<Tarefa>{
    const url = `${this.baseUrl}/tarefa`
    return this.http.post<Tarefa>(url, tarefa);
  }

  delete(id: String):Observable<void> {
    const url = `${this.baseUrl}/tarefa/${id}`
    return this.http.delete<void>(url)
  }

  update(tarefa: Tarefa):Observable<void> {
    const url = `${this.baseUrl}/tarefa/${tarefa.id}`
    return this.http.put<void>(url, tarefa)
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
