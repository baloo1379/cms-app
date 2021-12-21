import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  private postId: number;
  private pageTitle: string;

  constructor(private menuService: MenuService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle = `Post ${this.postId}`;
    this.menuService.setPageTitle(this.pageTitle);
  }
}
