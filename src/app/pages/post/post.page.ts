import { PostService } from './../../services/pages/post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/services/ui/menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  public title: string;
  public content: string;
  private postId: number;
  private pageTitle: string;

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(this.postId).subscribe(post => {
      this.pageTitle = post.title;
      this.title = post.title;
      this.content = post.content;
      this.menuService.setPageTitle(this.pageTitle);
      this.menuService.setPageBackgroundColor('white');
    });
  }
}
