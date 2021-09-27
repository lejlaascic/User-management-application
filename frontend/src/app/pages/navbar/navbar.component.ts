import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu = { main: false, child: false }

  constructor(public router: Router,
              private toast: ToastrService) { }


  ngOnInit(): void {
  }
  logout(){
    this.router.navigateByUrl('login')
    this.toast.info('You have successfully logged out', 'Message: ');
  }

  mainOver(){
    this.menu.main = true;
    //console.log('mainOver', this.menu);
  }
  mainOut(){
    this.menu.main = false;
    //console.log('mainOut', this.menu);
  }
  childOver(){
    this.menu.main = false;
    this.menu.child = true;
    //console.log('childOver', this.menu);
  }
   childOut(){
    this.menu.child = false;
    //console.log('childOut', this.menu);
  }
}
