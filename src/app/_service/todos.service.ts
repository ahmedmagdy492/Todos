import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http : HttpClient) {
  }

  getAllTodos()
  {
    return this.http.get('http://localhost:64060/Todo/Index');
  }

  addTodo(todo : Todo)
  {
    return this.http.post("http://localhost:64060/Todo/AddTodo", {todo});
  }

  deleteTodo(id: string)
  {
    return this.http.post("http://localhost:64060/Todo/DeleteTodo", {id});
  }

  editTodo(todo : Todo)
  {
    return this.http.post("http://localhost:64060/Todo/EditTodo", {todo});
  }
}
