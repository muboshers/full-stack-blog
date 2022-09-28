import { BlogController } from './blog.controller';
import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostModel } from './models/post.model';
@Module({
  imports: [PostModel],
  controllers: [BlogController],
  providers: [PostService],
})
export class BlogModule {}
