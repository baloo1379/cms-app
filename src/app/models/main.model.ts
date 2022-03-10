import { ActivePost } from './activePost.model';
import { MenuPost } from './menuPost.model';

export class MainPageModel {
  contentTitle: string;
  backgroundImage: string;
  backgroundColor: string;
  activePosts: Array<ActivePost>;
  menuPosts: Array<MenuPost>;

  constructor(object: any) {
    this.contentTitle = object?.contentTitle || '';
    this.backgroundImage = object?.backgroundImage || './assets/background_placeholder.png';
    this.backgroundColor = object?.backgroundColor || '#ddd';
    this.activePosts = object?.activePosts || [];
    this.menuPosts = object?.menuPosts || [];
  }
};
