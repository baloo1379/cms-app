export class PostModel {
  id: number;
  title: string;
  content: string;

  constructor(object: any) {
    this.id = object?.id || 0;
    this.title = object?.title || 0;
    this.content = object?.content || 0;
  }
}
