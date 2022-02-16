import { AppPage } from '../../../e2e/src/app.po';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public appPages$: Observable<any>;
  private appPagesBS = new BehaviorSubject<any>({});

  constructor() {
    this.appPages$ = this.appPagesBS.asObservable();
    const appPages = {
      main: { title: 'Strona Główna', url: '/home', icon: 'home' },
      coupons: { title: 'Kupony', url: '/coupons', icon: 'ticket' },
      post: { title: 'Post', url: '/post/1', icon: 'archive' }
    };
    this.appPagesBS.next(appPages);
  }
}
