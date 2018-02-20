import {Component, OnInit, Input, Output} from '@angular/core';
import {TodoApiService} from '../todoApi.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo;

  @Output() deleteListItem: EventEmitter<any> = new EventEmitter();

  public isEditing: boolean;

  public description: sting;

  constructor(public todoApiService: TodoApiService) {
  }

  ngOnInit() {
  }

  edit() {
    this.isEditing = true;
    this.description = this.todo.desc;
  }

  cancel() {
    this.isEditing = false;
  }

  save() {
    this.todo.desc = this.description;
    this.saveTodo()
      .then(result => {
        this.cancel();
      });
  }

  saveTodo() {
    return this.todoApiService.updateItem(this.todo);
  }

  delete() {
    this.todoApiService.deleteTodoItem(this.todo._id)
      .then(result => {
        this.deleteListItem.emit(this.todo._id);
      });
  }

}
