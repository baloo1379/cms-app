import { MainPageModel } from '../../models/main.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  public mainPageModel$: Observable<MainPageModel>;
  private mainPageModelBS = new BehaviorSubject<MainPageModel>(new MainPageModel({}));

  constructor() {
    const contentTitle = 'Kupony CMS';
    const contentTitleColor = '#545454';
    const backgroundImg = './assets/background_placeholder.png';
    const backgroundColor = '#999';
    const posImg = './assets/tile_placeholder.png';
    const postsGrid = [
      { img: posImg, link: '/post/1' },
      { img: posImg, link: '/post/2' },
      { img: posImg, link: '/post/3' },
      { img: posImg, link: '/post/4' },
      { img: posImg, link: '/post/5' },
      { img: posImg, link: '/post/6' },
      { img: posImg, link: '/post/7' },
      { img: posImg, link: '/post/8' },
      { img: posImg, link: '/post/9' },
      { img: posImg, link: '/post/10' },
      { img: posImg, link: '/post/11' },
      { img: posImg, link: '/post/12' }
    ];
    const mainPageModel = new MainPageModel({ contentTitle, contentTitleColor, backgroundImg, backgroundColor, postsGrid });

    this.mainPageModel$ = this.mainPageModelBS.asObservable();
    setTimeout(() => {
      this.mainPageModelBS.next(mainPageModel);
    }, 500);
  }
}
