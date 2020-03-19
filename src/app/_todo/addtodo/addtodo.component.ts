import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/_service/todos.service';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  constructor(public todoService: TodosService) {
    
  }

  ngOnInit(): void {
  }

  addTodo(title : string, content : string)
  {
    const todo : Todo = new Todo(title, content);
    this.todoService.addTodo(todo).subscribe(data => {
      location.reload();
    });
  }

}
