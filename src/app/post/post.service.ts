import { Injectable } from '@angular/core';
import {Post} from "./post";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../user/user";

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{

    return this.http.get('api/posts');
  }

  getPostsbyId(id: number): Observable<Post> {
    return this.http.get(`/api/posts/${id}`);
  }

  getAuthor(id: number) : Observable<User> {
    return this.http.get(`/api/users/${id}`)
  }

}
