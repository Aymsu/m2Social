import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import {Routes, RouterModule} from "@angular/router";
import {PostService} from "./post.service";
import {HttpClientModule} from "@angular/common/http";
import { RootComponent } from './root/root.component';

const postRoutes: Routes = [
  {
    path: 'posts', component: RootComponent,
    children: [
      {path: ':id', component: PostComponent},
      {path: '', component: PostListComponent}

    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(postRoutes),
    HttpClientModule
  ],
  declarations: [PostComponent, PostListComponent, RootComponent],
  providers:[PostService]
})
export class PostModule { }
