import {Component, OnInit, Input} from '@angular/core';
import {Comment} from "../comment";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() postToComment? : number = null;

  comments: Comment[];

  constructor(private commentService : CommentService) { }

  ngOnInit() {

    this.commentService.getCommentsFromPost(this.postToComment).subscribe(
        comments => this.comments = comments
    );
  }

}
