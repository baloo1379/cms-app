export class MainPageModel {
  contentTitle: string;
  contentTitleColor: string;
  backgroundImg: string;
  backgroundColor: string;
  postsGrid: Array<any>;

  constructor(object: any) {
    this.contentTitle = object?.contentTitle || '';
    this.contentTitleColor = object?.contentTitleColor || '#444';
    this.backgroundImg = object?.backgroundImg || './assets/background_placeholder.png';
    this.backgroundColor = object?.backgroundColor || '#ddd';
    this.postsGrid = object?.postsGrid || [];
  }
};
