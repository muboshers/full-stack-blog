import { Observable } from 'rxjs';
import { PostService } from './services/post.service';
import { PostModel } from './models/post.model';
export declare class BlogController {
    private postService;
    constructor(postService: PostService);
    findAll(): Observable<PostModel[]>;
}
