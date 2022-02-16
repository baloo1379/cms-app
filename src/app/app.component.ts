import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuService } from 'src/app/services/ui/menu.service';
import { AppService } from 'src/app/services/app.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  public appPages = [];
  public pageTitle = '';
  public pageBackgroundColor = '#ffffff';
  private subscriptions: Array<Subscription> = [];

  constructor(private appService: AppService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.appService.appPages$.subscribe(pages => this.appPages = pages));
    this.subscriptions.push(this.menuService.pageTitle$.subscribe(title => {
      setTimeout(() => { this.pageTitle = title; }, 0);
    }));
    this.subscriptions.push(this.menuService.pageBackgroundColor$.subscribe(color => {
      setTimeout(() => { this.pageBackgroundColor = color; }, 0);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
