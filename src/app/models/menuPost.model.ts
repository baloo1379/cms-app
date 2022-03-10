export class MenuPost {
  postID: number;
  title: string;
  icon: string;

  constructor(object: any) {
    this.postID = object?.postID || 0;
    this.title = object?.title || '';
    this.icon = object?.icon || '';
  }
};
