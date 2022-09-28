import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';
export declare class PostService {
    findAll(): Observable<PostModel[]>;
}
