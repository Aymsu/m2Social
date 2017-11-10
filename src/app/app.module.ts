import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PostModule} from "./post/post.module";
import {CommentModule} from "./comment/comment.module";
import {UserModule} from "./user/user.module";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    CommentModule,
    UserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
