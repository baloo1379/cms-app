
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
  public userObservable: Observable<User|null>;
  private userSubject: AsyncSubject<User|null>;
  private userLoggedInSubject: AsyncSubject<boolean>;
  private userLoggedInObservable: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.userLoggedInSubject = new AsyncSubject<boolean>();
    this.userSubject = new AsyncSubject<User|null>();
    this.userObservable = this.userSubject.asObservable();
    this.userLoggedInObservable = this.userLoggedInSubject.asObservable();
  }

  login(email: string, password: string) {
    this.userLoggedInSubject = new AsyncSubject<boolean>();
    this.userSubject = new AsyncSubject<User|null>();
    this.userObservable = this.userSubject.asObservable();
    this.userLoggedInObservable = this.userLoggedInSubject.asObservable();
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
}