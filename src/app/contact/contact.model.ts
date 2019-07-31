export class Contact{
  id:number;
  name: string;
  status: string;
  category: string;
  source: string;
  type: string;
  constructor(id:number, name: string, status: string, category: string, source: string, type: string) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.category = category;
    this.source = source;
    this.type = type;
  }
}