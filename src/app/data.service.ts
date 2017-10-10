import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private apiBase = 'http://localhost:3000/todos';


  constructor(private http: HttpClient) { }

  updateTodo(todo) {
    return this.http.put(`${this.apiBase}/${todo.id}`, todo);
  }

  removeTodo(todo) {
    return this.http.delete(`${this.apiBase}/${todo.id}`, todo);
  }

  AddTodo(todo) {
    return this.http.post(this.apiBase, todo);
  }

  getTodos() {
    return this.http.get<any[]>(this.apiBase);
  }

}
