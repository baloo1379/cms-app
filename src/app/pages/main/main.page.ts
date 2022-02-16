import { MainPageService } from 'src/app/services/pages/main.service';
import { AppService } from 'src/app/services/app.service';
import { MenuService } from 'src/app/services/ui/menu.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnDestroy, OnInit {
  public pageTitle = '';
  public pageBackgroundColor = 'white';
  public pageBackgroundImg = '';
  public postsGrid = [];
  public contentTitle = '';
  public contentTitleColor = 'black';

  private subscriptions: Array<Subscription> = [];

  constructor(
    private appService: AppService,
    private menuService: MenuService,
    private mainPageService: MainPageService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(this.appService.appPages$.subscribe(appPages => {
      this.pageTitle = appPages?.main?.title;
      this.menuService.setPageTitle(this.pageTitle);
    }));
    this.subscriptions.push(this.mainPageService.mainPageModel$.subscribe(mainPageModel => {
      this.contentTitle = mainPageModel.contentTitle;
      this.contentTitleColor = mainPageModel.contentTitleColor;
      this.pageBackgroundImg = mainPageModel.backgroundImg;
      this.pageBackgroundColor = mainPageModel.backgroundColor;
      this.menuService.setPageBackgroundColor(this.pageBackgroundColor);
      this.postsGrid = mainPageModel.postsGrid;
    }));
  }

  prepareGradient() {
    return `linear-gradient(to bottom, rgba(0,0,0,0), ${this.pageBackgroundColor})`;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
