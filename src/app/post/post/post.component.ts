import {Component, OnInit, Input} from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";
import {User} from "../../user/user";
import {ParamMap, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postInput?: Post;

    paramObs: Subscription

  user: User;


  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {

      console.log(this.postInput);

      this.paramObs = this.route.paramMap.switchMap(
          (params: ParamMap) => this.postService.getPostsbyId(+params.get('id'))
      ).subscribe(post => this.postInput = post);

  }

}
