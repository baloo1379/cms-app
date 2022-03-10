export class ActivePost {
  postID: number;
  imageID: number;

  constructor(object: any) {
    this.postID = object?.postID || 0;
    this.imageID = object?.imageID || '';
  }
};
