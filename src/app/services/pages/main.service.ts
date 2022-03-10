import { MainPageModel } from './../../models/main.model';
import { AsyncSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private mainPageModelBS = new AsyncSubject<MainPageModel>();

  constructor() { }

  public setMainPage(mainPageModel: MainPageModel) {
    this.mainPageModelBS.next(mainPageModel);
    this.mainPageModelBS.complete();
  }

  public getMainPage() {
    return this.mainPageModelBS.asObservable();
  }
}
