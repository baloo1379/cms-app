import { MainPageModel } from './../../models/main.model';
import { AsyncSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private mainPageModelBS = new AsyncSubject<MainPageModel>();

  constructor(private http: HttpClient) { }

  public setMainPage(mainPageModel: MainPageModel) {
    this.mainPageModelBS.next(mainPageModel);
    this.mainPageModelBS.complete();
  }

  public getMainPage() {
    return this.mainPageModelBS.asObservable();
  }

  public initMainPage() {
    return this.http.get<MainPageModel>('/api/main-page').pipe(map(result => {
      const mainPageModel = new MainPageModel(result);
      this.setMainPage(mainPageModel);
      return mainPageModel;
    }));
  }
}
