
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, AsyncSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user.model';


const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-Type': 'application/json',
    // eslint-disable-next-line @typescript-eslint/naming-convention, quote-props
    'Accept': '*/*'
  }),
  observe: 'response' as const
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: AsyncSubject<User|null>;
  private userLoggedInSubject: AsyncSubject<boolean>;

  constructor(private http: HttpClient) {
    this.userLoggedInSubject = new AsyncSubject<boolean>();
    this.userLoggedInSubject.next(false);
    this.userLoggedInSubject.complete();
    this.userSubject = new AsyncSubject<User|null>();
  }

  login(email: string, password: string) {
    this.userLoggedInSubject = new AsyncSubject<boolean>();
    this.userSubject = new AsyncSubject<User|null>();
    return this.http.post<any>(
      `/api/Users/Login`,
      {email, password},
      HTTP_OPTIONS
    ).pipe(
      map(data => {
        console.log({login: data.status});
        if(data.status === 200){
          return this.getUserData().subscribe(
            loginData => { this.setUserData(loginData); },
            err => { console.error(err); }
          );
        }
        return data;
      }), catchError(error => {
        console.error(error);
        return throwError(error?.error?.errors);
      })
    );
  }

  register(email: string, password: string) {
    this.userLoggedInSubject = new AsyncSubject<boolean>();
    this.userSubject = new AsyncSubject<User|null>();

    return this.http.post<any>(
      '/api/Users/Register',
      {email, password},
      HTTP_OPTIONS
    ).pipe(map(data => {
      console.log({register: data.status});
      this.userSubject.next(null);
      this.userSubject.complete();
      this.userLoggedInSubject.next(false);
      this.userLoggedInSubject.complete();
      return data;
    }), catchError(error => {
      console.error(error);
      return throwError(error?.error?.errors);
    }));
  }

  logout() {
    this.userLoggedInSubject = new AsyncSubject<boolean>();
    this.userSubject = new AsyncSubject<User|null>();

    return this.http.delete<any>('/api/Users/Logout', HTTP_OPTIONS).pipe(map(data => {
      console.log({logout: data.status});
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.userSubject.complete();
      this.userLoggedInSubject.next(false);
      this.userLoggedInSubject.complete();
      return data;
    }));
  }

  getUserData(): Observable<HttpResponse<any>>{
    return this.http.get<any>(`/api/Users/Logged`, HTTP_OPTIONS).pipe(map(data => {
      console.log({getUserData: data.status});
      if(data.status === 200){
        this.userLoggedInSubject.next(true);
        this.userLoggedInSubject.complete();
      }
      else{
        this.userLoggedInSubject.next(false);
        this.userLoggedInSubject.complete();
      }
      return data;
    }));
  }

  setUserData(data: any) {
    console.log({setUserData: data.body});
    const tempUser = new User(data.body);
    localStorage.setItem('user', JSON.stringify(tempUser));
    this.userSubject.next(tempUser);
    this.userSubject.complete();
  }

  public isUserLoggedIn(): Observable<boolean> {
    return this.userLoggedInSubject.asObservable();
  }
}
