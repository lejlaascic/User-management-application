import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  public singupForm!: FormGroup
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      address:['',Validators.required],
      mobile: ['',Validators.required],
      city: ['',Validators.required],
      country: ['',Validators.required],
    })
  }
  login(){
    this.router.navigateByUrl('login');
  }
  singUp(){
    this.http.post<any>('http://localhost:3000/singupUsers',this.singupForm.value)
      .subscribe(res=>{
        this.toastr.success('Singup Successfully', 'Message: ');
        this.singupForm.reset();
        this.router.navigateByUrl('login')
      },err=>{
        this.toastr.error('Something went wromg','Message: ' )
      })
  }
}
