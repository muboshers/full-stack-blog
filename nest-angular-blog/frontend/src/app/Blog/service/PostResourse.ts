import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostListItem } from '../model/postlist.item';
import { apiConfig } from '../api.config';

@Injectable({ providedIn: 'root' })
export class PostResourseService {
    private readonly URL = `http://localhost:3000/posts`;
    constructor(private http: HttpClient) {}
    public findAll(): any {
        return this.http.get(this.URL);
    }
}
