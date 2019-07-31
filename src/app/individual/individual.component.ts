import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

import { ContactModalComponent } from '../contact/contact-modal/contact-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TagModalComponent } from '../contact/tag-modal/tag-modal.component';
import { Country } from './country';
import { State } from './state';
import { IndividualService } from './individual.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
  providers: [IndividualService]
})
export class IndividualComponent implements OnInit {
  signupForm: FormGroup;

  selectedCountry:Country = new Country(0, 'India'); 
  countries: Country[];
  states: State[];
  // const numericNumberReg= '^-?[0-9]\\d*(\\.\\d{1,2})?$';
  // phone: Array<String> = ['IN(+91)','RS(+381)' ,'USA(+1)','UA(+380' ];

  constructor(private modalService: NgbModal, 
    private fb: FormBuilder,
    private dropdown: IndividualService) {
    this.countries = this.dropdown.getCountries();
  }


  ngOnInit() {
    this.signupForm = this.fb.group({
      Salutation: ['', Validators.required],
      first: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      middle: ['', Validators.required],
      last: ['', Validators.required],
      suffix: ['', Validators.required],
      nick: ['', Validators.required],
      design: ['', Validators.required],
      job: ['', Validators.required],
      emp: ['', Validators.required],
      family: ['', Validators.required],
      sal: ['', Validators.required],
      sp_first: ['', Validators.required],
      sp_middle: ['', Validators.required],
      sp_last: ['', Validators.required],
      suf: ['', Validators.required],
      sp_nick: ['', Validators.required],
      sp_design: ['', Validators.required],
      sp_job: ['', Validators.required],
      sp_emp: ['', Validators.required],
      add: this.fb.array([
        this.addGroup()
      ]),
      phnadd: this.fb.array([
        this.phoneGroup()
      ]),
      email: this.fb.array([
        this.emailGroup()
      ]),
      social: this.fb.array([
        this.SocialGroup()
      ]),
      status: new FormControl(''),
      gender: new FormControl(''),
      category: new FormControl(''),
      taxid: new FormControl(''),
      source: new FormControl(''),
      dob: new FormControl(''),
      reffered: new FormControl(''),
      merit: new FormControl(''),
      date: new FormControl(''),
      servicing: new FormControl(''),
      client: new FormControl(''),
      clienttd: new FormControl(''),
      writing: new FormControl(''),
      dod: new FormControl(''),
      permission: new FormControl(''),
      advisory: new FormControl(''),
      asso_advisor: new FormControl(''),
      CSA_Advisor: new FormControl(''),
    })

  }
  onSelect(countryid) {
    this.states = this.dropdown.getStates().filter((item) => item.countryid == countryid);
  }
  onSubmit() {
    console.log(this.signupForm.value);
  }
  addGroup(): FormGroup {
    return this.fb.group({
      adres: ['', Validators.required],
      cntry: ['', Validators.required],
      adrs: ['', Validators.required],
      adress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      code: ['', Validators.required],
    });
  }
  AddAnother() {
    (<FormArray>this.signupForm.get('add')).push(this.addGroup());
  }
  remove(index: number) {
    (<FormArray>this.signupForm.get('add')).removeAt(index);
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  phoneGroup(): FormGroup {
    return this.fb.group({
      adrs_type: ['', Validators.required],
      phnmbr: ['', Validators.required],
      fone: ['', Validators.required],
      area: ['', Validators.required],
      speed: ['', Validators.required],
    });
  }
  phones(): void {
    (<FormArray>this.signupForm.get('phnadd')).push(this.phoneGroup());
  }
  removephone(phoneindex: number): void {
    (<FormArray>this.signupForm.get('phnadd')).removeAt(phoneindex);
  }
  emailGroup(): FormGroup {
    return this.fb.group({
      email_type: ['', [Validators.required]],
      email_adres: ['', [Validators.required]],
    })
  }
  addemails(): void {
    (<FormArray>this.signupForm.get('email')).push(this.emailGroup());
  }
  removeemail(r: number) {
    (<FormArray>this.signupForm.get('email')).removeAt(r);
  }
  SocialGroup(): FormGroup {
    return this.fb.group({
      social_type: [''],
      web_adrs: [''],
    })
  }
  social() {
    (<FormArray>this.signupForm.get('social')).push(this.SocialGroup());
  }
  remove_social(remove: number) {
    (<FormArray>this.signupForm.get('social')).removeAt(remove);
  }

  modal() {
    console.log('----modal---clicked----');
    const modalRef = this.modalService.open(ContactModalComponent);
    modalRef.componentInstance.id = 10; // should be the id
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  tags() {
    console.log('---Modal-Clicked-----');
    const modalRef = this.modalService.open(TagModalComponent);
    modalRef.componentInstance.id = 10;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    })
  }
}
