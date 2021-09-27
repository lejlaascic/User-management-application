import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   images = [
    {img: 'https://images.unsplash.com/photo-1573164713605-61f736e04261?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80', title: 'Slider1'},
    {img: 'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80', title: 'Slider2'},
    {img: 'https://images.unsplash.com/photo-1587697119965-33b91f5c1a00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80', title: 'Slider3'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
