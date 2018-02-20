import {Component, OnInit} from '@angular/core';
import {TodoApiService} from '../todoApi.service';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: any;

  public isCreatedNew = false;

  public newTodoDesc: string;

  constructor(
    public todoApiService: TodoApiService,
    public snackBar: MatSnackBar) {
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
        this.snackBar.open('All Todos deleted', '', {
          duration: 2000,
        });
        this.todos = [];
      });
  }

  deleteListItem(id) {
    this.todos = this.todos.filter((i) => {
      return i._id !== id;
    });
  }

}
