import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private pageTitleSubject = new Subject<any>();
  private pageBackgroundColorSubject = new Subject<any>();

  constructor() { }

  setPageTitle(pageTitle: string): void {
    this.pageTitleSubject.next(pageTitle);
  }

  onPageTitleChange(): Observable<any> {
    return this.pageTitleSubject.asObservable();
  }

  setPageBackgroundColor(color: string) {
    this.pageBackgroundColorSubject.next(color);
  }

  onPageBackgroundColorChange(): Observable<any> {
    return this.pageBackgroundColorSubject.asObservable();
  }
}
