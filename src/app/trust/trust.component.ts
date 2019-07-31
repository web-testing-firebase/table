import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss']
})
export class TrustComponent implements OnInit {
  myForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      
      address:this.fb.group({
        first:[''],
        middle:[''],
        last:[''],
      }),

      aliases:this.fb.array([
        this.fb.control('')
      ])
    })
  }
  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset();
  }
  // onAddHobby() {
  //   const control = new FormControl('');
  //   (<FormArray>this.myForm.get('hobbies')).push(control);
  // }
  // Remove(index:number){
  //   (<FormArray>this.myForm.get('hobbies')).removeAt(index);
  // }
  get aliases() {
    return this.myForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  remove(index:number) {
    this.aliases.removeAt(index)
  }
}
