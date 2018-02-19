import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) {
  }

  getAllTodos() {
    return  this.http.get('http://localhost:3012/todos').toPromise();
  }

}
