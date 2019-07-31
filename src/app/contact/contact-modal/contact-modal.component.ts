import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  @Input()id: number;
  myForm: FormGroup;

  constructor( public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) {
      this.createForm();
    }

  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  createForm(){
    this.myForm = this.formBuilder.group({
      keywords: ''
        });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}
