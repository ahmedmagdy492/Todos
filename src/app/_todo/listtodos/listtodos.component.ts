import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/todo';
import { TodosService } from 'src/app/_service/todos.service';

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {

  public todos : Todo[] = [];

  constructor(public todosService: TodosService) { 
    this.getTodos();
  }

  ngOnInit(): void {
  }

  getTodos()
  {
    this.todosService.getAllTodos().subscribe((data) => {
      this.todos = data as Todo[];
    });
  }

  deleteTodo(e)
  {
    const id = e.target.parentElement.parentElement.children[0].innerText;
    console.log(id);
    this.todosService.deleteTodo(id).subscribe((data) => {
      this.todos = data as Todo[];
    });
  }

  editTodo(e,editEle : HTMLDivElement)
  {
    editEle.style.top = "0";
    document.title = "Edit";
    const id = e.target.parentElement.parentElement.children[0].innerText;    
    const title = e.target.parentElement.parentElement.children[1].innerText;
    const content = e.target.parentElement.parentElement.children[2].innerText;
    (editEle.children[0].children[0] as HTMLInputElement).value = id;
    (editEle.children[0].children[2] as HTMLInputElement).value = title;
    (editEle.children[1].children[1] as HTMLInputElement).value = content;
  }

  update(edit : HTMLDivElement, id: number, title : string, content : string)
  {
    const todo : Todo = new Todo(title, content, id);
    this.todosService.editTodo(todo).subscribe((data) => {
      this.todos = data as Todo[];
    });
    this.hideEdit(edit);
  }

  hideEdit(editEle : HTMLDivElement)
  {
    editEle.style.top = "-9000px";
    document.title = "My Todos";
  }
}
