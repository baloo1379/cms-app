export class CouponTags {
  id: number;
  name: string;

  constructor(object: any) {
    this.id = object?.backgroundColor || 0;
    this.name = object?.tags || '';
  }
}
