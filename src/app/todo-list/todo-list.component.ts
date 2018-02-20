import {Component, OnInit} from '@angular/core';
import {TodoApiService} from '../todoApi.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: any;

  public isCreatedNew = false;

  public newTodoDesc: string;

  constructor(public todoApiService: TodoApiService) {
  }

  ngOnInit() {
    this.todoApiService.getAllTodos()
      .then(result => {
        this.todos = result;
      });
  }

  startCreateNew(): void {
    this.isCreatedNew = true;
  }

  cancelCreateNew(): void {
    this.newTodoDesc = '';
    this.isCreatedNew = false;
  }

  saveNew() {
    this.todoApiService.createNew(this.newTodoDesc)
      .then(result => {
        this.cancelCreateNew();
        this.newTodoDesc = '';
        this.todos.push(result);
      });
  }

  deleteAllTodos() {
    this.todoApiService.deleteAllTodos()
      .then(result => {
        this.todos = [];
      });
  }

  test(item) {
    console.log(item);
  }

}
