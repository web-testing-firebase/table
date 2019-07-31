import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Page } from './page.model';
import { PagedData } from './paged.data';
import { Contact } from './contact.model';

const ContactData = require('../../assets/contact.json');

@Injectable()
export class ContactService {
  
 public getResults(page: Page):Observable<PagedData<Contact>>{
   return of (ContactData).pipe(map(data=>this.getPagedData(page)));
 }
 private getPagedData(page: Page): PagedData<Contact> {

  const pagedData = new PagedData<Contact>();
  page.totalElements = ContactData.length;
  page.totalPages = page.totalElements / page.size;
  const start = page.pageNumber * page.size;
  const end = Math.min((start + page.size), page.totalElements);
  for (let i = start; i < end; i++){

      const jsonObj = ContactData[i];
      const cont = new Contact(jsonObj.id, jsonObj.name, jsonObj.status, jsonObj.category, jsonObj.source, jsonObj.type);
      pagedData.data.push(cont);

    }

    pagedData.page = page;
    return pagedData;
  }
}