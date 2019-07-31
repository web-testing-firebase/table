import {Component, OnInit,Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({

'selector': 'app-tag-modal',
  templateUrl: './tag-modal.component.html',
  styleUrls: ['./tag-modal.component.scss']

})
export class TagModalComponent implements OnInit {
  @Input()id: number;
  myForm: FormGroup;

  constructor( public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder){
      this.createForm();
    }
  ngOnInit(){
    
  }
  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  createForm(){
    this.myForm = this.formBuilder.group({
      tags: ''
        });
  }
  private submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}