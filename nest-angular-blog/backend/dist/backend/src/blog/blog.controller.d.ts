import { PostService } from './../../../frontend/src/app/Blog/service/PostService';
import { PostModel } from './models/post.model';
import { Observable } from 'rxjs';
export declare class BlogController {
    private postService;
    constructor(postService: PostService);
    findAll(): Observable<PostModel[]>;
}
