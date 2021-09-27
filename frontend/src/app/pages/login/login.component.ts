import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private route: Router,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              private http: HttpClient
              ) { }

  ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  singup(){
    this.route.navigateByUrl('singup')
  }
  login(){
   this.http.get<any>('http://localhost:3000/singupUsers')
    .subscribe(res=>{
     const user = res.find((a:any)=>{
       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
     })
     if(user){
       this.toastr.success('Login Successfully', 'Message: ');
       this.loginForm.reset();
       this.route.navigateByUrl('home')
     }
    },err=>{
      this.toastr.error('Something went wrong','Message: ')
    })
  }
}
