import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PostModel } from 'src/app/models/posts/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private router: Router) { }

  getPost(id: number) {
    return this.http.get<PostModel>(`/posts/${id}`).pipe(map(result => {
      result.id = id;
      return result;
    }), catchError(error => {
      console.log(error);
      this.router.navigate(['/404']);
      return throwError(error);
    }));
  }
}
