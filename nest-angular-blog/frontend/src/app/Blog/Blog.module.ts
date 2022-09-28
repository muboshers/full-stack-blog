import { PostListModule } from './list/PostList.module';
import { PostResourseService } from './service/PostResourse';
import { PostService } from './service/PostService';
import { NgModule } from '@angular/core';
import { PostListComponent } from './list/PostList.Component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [PostListModule, HttpClientModule],
    exports: [PostListModule],
    declarations: [],
    providers: [PostService, PostResourseService],
})
export class BlogModule {}
