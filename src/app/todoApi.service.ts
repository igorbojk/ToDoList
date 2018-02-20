import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class TodoApiService {

  constructor(public http: HttpClient) {
  }

  getAllTodos() {
    return this.http.get('http://localhost:3012/todos').toPromise();
  }

  deleteAllTodos() {
    return this.http.delete('http://localhost:3012/todos').toPromise();
  }

  createNew(desc) {
    const params = {
      desc: desc
    };
    return this.http.post('http://localhost:3012/todos', params).toPromise();
  }

  deleteTodoItem(id) {
    return this.http.delete(`http://localhost:3012/todos/${id}`).toPromise();
  }

  updateItem(item) {
    const params = {
      item: item,
    };
    return this.http.put(`http://localhost:3012/todos/${item._id}`, params).toPromise();
  }
}
