import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get('api/users');
  }

  getUserbyId(id: number): Observable<User> {
    return this.http.get(`/api/users/${id}`);
  }

}
