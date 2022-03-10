export class GridModel {
  image: string;
  link: string;

  constructor(object: any) {
    this.image = object?.image || './assets/tile_placeholder.png';
    this.link = object?.link || '';
  }
}
