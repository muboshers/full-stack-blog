import { Observable } from 'rxjs';
import { Controller, Get } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostModel } from './models/post.model';
@Controller('posts')
export class BlogController {
  constructor(private postService: PostService) {}

  @Get()
  findAll(): Observable<PostModel[]> {
    return this.postService.findAll();
  }
}
