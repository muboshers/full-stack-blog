import { PostListItem } from './../model/postlist.item';
import { Observable } from 'rxjs';
import { PostService } from './../service/PostService';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: 'PostList.html',
})
export class PostListComponent implements OnInit {
    public postList!: Observable<PostListItem[]>;
    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postList = this.postService.getAllPostItems();
    }
}
