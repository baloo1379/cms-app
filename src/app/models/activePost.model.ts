export class ActivePost {
  postID: number;
  image: number;

  constructor(object: any) {
    this.postID = object?.postID || 0;
    this.image = object?.image || '';
  }
};
