export class CouponDetail {
  id: number;
  name: string;
  image: string;
  description: string;
  validFrom: string;
  validTo: string;

  constructor(object: any) {
    this.id = object?.id || 0;
    this.name = object?.name || '';
    this.image = object?.image || '';
    this.description = object?.description || '';
    this.validFrom = object?.validFrom || '';
    this.validTo = object?.validTo || '';
  }
}
