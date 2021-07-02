import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputForm!: FormGroup;

   constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
     this.inputForm =this.fb.group({
      firstName: [null,Validators.required],
      password: [null ,[Validators.required,Validators.minLength(6)]],
    
       
    })    
  }


  addUsers()
  {
   console.log(this.inputForm.controls['firstName'].value) 
   console.log(this.inputForm.controls['password'].value)
  }

}
