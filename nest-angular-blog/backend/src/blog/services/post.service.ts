import { PostModel } from '../models/post.model';
import { Injectable } from '@nestjs/common';
import { mockPost } from '../mocks/mock.post';
import { Observable, of } from 'rxjs';

@Injectable()
export class PostService {
  public findAll(): Observable<PostModel[]> {
    return of(mockPost);
  }
}
