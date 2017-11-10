import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "./comment";

@Injectable()
export class CommentService {

  constructor(private http: HttpClient) { }


  getCommentsFromPost(id: number): Observable<Comment[]> {
    return this.http.get(`api/posts/${id}/comments`);
  }

  get

}
