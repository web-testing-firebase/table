import { Component, OnInit } from '@angular/core';

import { CONTACT } from './contact.mock-list';

import { Page } from './page.model';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormModalComponent} from '../form-modal/form-modal.component';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})

export class ContactComponent implements OnInit {

  page = new Page();
  rows = new Array<Contact>();

  contact = CONTACT;
  title = 'angular-datatables';

  columns = [
    // NOTE: cells for current page only !
    { name: 'Name', summaryFunc: (cells) => `${cells.length} total` },
    { name: 'Status', summaryFunc: () => null },
    { name: 'Category', summaryFunc: () => null },
    { name: 'Source',summaryFunc:()=>null}
  ];
  constructor(private service: ContactService,
              private modalService: NgbModal ) {
    this.page.pageNumber = 1;
    this.page.size = 10;
  } 

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo){
    this.page.pageNumber = pageInfo.offset;
    this.service.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
  NewContacts(){
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.id = 10; //should be the id
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}