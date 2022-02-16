export class CouponsPageModel {
  backgroundColor: string;
  postsGrid: Array<any>;

  constructor(object: any) {
    this.backgroundColor = object?.backgroundColor || '#ddd';
    this.postsGrid = object?.postsGrid || [];
  }
};
