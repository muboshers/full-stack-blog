import { PostListComponent } from './PostList.Component';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [MatCardModule, MatButtonModule, CommonModule],
    exports: [PostListComponent],
    declarations: [PostListComponent],
    providers: [],
})
export class PostListModule {}
