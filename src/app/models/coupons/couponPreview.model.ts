export class CouponPreview {
  id: number;
  image: string;
  tags: Array<any>;

  constructor(object: any) {
    this.id = object?.id || 0;
    this.image = object?.image || '';
    this.tags = object?.tags || [];
  }
}
