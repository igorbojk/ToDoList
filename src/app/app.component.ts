import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public todos: any;

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    console.log(this.apiService);
    this.apiService.getAllTodos()
      .then(result => {
        this.todos = result;
      });
  }


}
