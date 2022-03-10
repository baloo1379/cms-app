import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostModel } from 'src/app/models/posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id: number) {
    return this.http.get<PostModel>(`/posts/${id}`).pipe(map(result => {
      result.id = id;
      return result;
    }));
  }
}