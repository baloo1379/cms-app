export class CouponCode {
  id: number;
  code: string;

  constructor(object: any) {
    this.id = object?.id || 0;
    this.code = object?.code || '';
  }
}
