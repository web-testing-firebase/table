import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private router:Router) {   }

  ngOnInit() {
    // this.router.navigate(['new'], {relativeTo: this.route});
  }

  // closeModal() {
  //   this.activeModal.close('Modal Closed');
  // }
}
