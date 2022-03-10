import { MainPageService } from 'src/app/services/pages/main.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, AsyncSubject } from 'rxjs';
import { MainPageModel } from '../models/main.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private appPagesBS = new AsyncSubject<any>();

  constructor(private http: HttpClient, private mainPageService: MainPageService) {
    let appPages = [
      { title: 'Strona Główna', url: '/home', icon: 'home' },
      { title: 'Kupony', url: '/coupons', icon: 'ticket' },
      { title: 'Moje konto', url: '/account', icon: 'person' }
    ];
    this.initMainPage().subscribe(mainPage => {
      const menuPages = mainPage.menuPosts.map(menuPost => ({title: menuPost.title, icon: menuPost.icon, url: `/post/${menuPost.postID}`}));
      appPages = appPages.concat(menuPages);
      this.appPagesBS.next(appPages);
      this.appPagesBS.complete();
    });
  }

  public getAppPage(): Observable<any> {
    return this.appPagesBS.asObservable();
  }

  private initMainPage() {
    return this.http.get<MainPageModel>('/main').pipe(map(result => {
      const mainPageModel = new MainPageModel(result);
      this.mainPageService.setMainPage(mainPageModel);
      return mainPageModel;
    }));
  }
}
