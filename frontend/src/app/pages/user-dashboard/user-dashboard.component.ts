
import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from './user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  users: User[]=[];
  formValue!: FormGroup;
  userModelObj: User = new User();
  userData!: any;
  isDisplay: boolean = true;
  showUpdate!: boolean;
  showAdd!: boolean;
  firstName: any;
  page: number = 1;
  order: string = '';
  reverse: boolean = false;

  constructor( private formBuilder: FormBuilder,
              private api: ApiService,
              private toastr: ToastrService,
             ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required],
      image: ['',Validators.required],
      address:['',Validators.required],
      mobile: ['',Validators.required],
      city: ['',Validators.required],
      country: ['',Validators.required],
    })
    this.getAllUsers();
  }
  postUserDetails(){
    this.userModelObj.firstName = this.formValue.value.firstname;
    this.userModelObj.lastName = this.formValue.value.lastname;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.image = this.formValue.value.image;
    this.userModelObj.address = this.formValue.value.address;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.userModelObj.city = this.formValue.value.city;
    this.userModelObj.country = this.formValue.value.country;

    this.api.postUser(this.userModelObj)
      .subscribe(res=>{
        console.log(res);
        this.toastr.success('User Added Successfully','Message');
        this.formValue.reset();
        this.getAllUsers();
      },err=>{
        this.toastr.error('Something went wrong','Error')
      })
  }
  getAllUsers(){
    this.api.getUser()
      .subscribe(res=>{
        this.userData = res;
      })
  }

  delateUser(user: any){
    this.api.deleteUser(user.id)
      .subscribe(res=>{
        this.toastr.success('User Delete Successfully','Message:');
        this.getAllUsers();
      },err=>{
        this.toastr.error('Something went wrong','Error')
      })
  }

  editUser(user: any){
   this.showAdd = false;
   this.showUpdate = true;
   this.userModelObj.id = user.id;
   this.formValue.controls['firstname'].setValue(user.firstName);
   this.formValue.controls['lastname'].setValue(user.lastName);
   this.formValue.controls['email'].setValue(user.email);
   this.formValue.controls['image'].setValue(user.image);
   this.formValue.controls['address'].setValue(user.address);
   this.formValue.controls['mobile'].setValue(user.mobile);
   this.formValue.controls['city'].setValue(user.city);
   this.formValue.controls['country'].setValue(user.country);

   this.isDisplay = !this.isDisplay
  }
  updateUser(){
    this.userModelObj.firstName = this.formValue.value.firstname;
    this.userModelObj.lastName = this.formValue.value.lastname;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.image = this.formValue.value.image;
    this.userModelObj.address = this.formValue.value.address;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.userModelObj.city = this.formValue.value.city;
    this.userModelObj.country = this.formValue.value.country;

    this.api.updateUser(this.userModelObj,this.userModelObj.id)
      .subscribe(res=>{
        this.toastr.success('Update Successfully', 'Message: ');
        this.formValue.reset();
        this.getAllUsers();
      })
  }

  clearForm(){
    this.formValue.reset();
  }
  clickAddUser(){
    this.isDisplay = !this.isDisplay
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  clickEditUser(){
    this.formValue.reset();
    this.showAdd = false;
    this.showUpdate = true;
  }
  searchUser(){
   if (this.firstName == ''){
     this.ngOnInit();
   }else{
     this.userData = this.userData.filter((res: { firstName: string; })=>{
       return res.firstName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
     })
   }
  }

  setOrder(order: string){
    this.order = order;
    this.reverse = !this.reverse;
  }

}
