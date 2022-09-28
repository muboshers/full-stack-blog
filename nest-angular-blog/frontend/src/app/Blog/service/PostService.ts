import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PostListItem } from '../model/postlist.item';
import { PostResourseService } from './PostResourse';

@Injectable()
export class PostService {
    constructor(private postResourse: PostResourseService) {}

    public getAllPostItems(): Observable<PostListItem[]> {
        return this.postResourse.findAll().pipe()
    }
}
