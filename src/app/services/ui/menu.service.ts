import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public pageTitle$: Observable<string>;
  public pageBackgroundColor$: Observable<string>;

  private pageTitleSubject = new Subject<any>();
  private pageBackgroundColorSubject = new Subject<any>();

  constructor() {
    this.pageTitle$ = this.pageTitleSubject.asObservable();
    this.pageBackgroundColor$ = this.pageBackgroundColorSubject.asObservable();
  }

  setPageTitle(pageTitle: string): void {
    this.pageTitleSubject.next(pageTitle);
  }

  setPageBackgroundColor(color: string) {
    this.pageBackgroundColorSubject.next(color);
  }
}
