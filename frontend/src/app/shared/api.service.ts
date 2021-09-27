import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { User } from '../pages/user-dashboard/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  postUser(user: any){
    return this.http.post<any>('http://localhost:3000/posts', user)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
  getUser(){
    return this.http.get<any>('http://localhost:3000/posts')
     .pipe(map((res:any)=>{
        return res;
      }))
  }
  updateUser(user: any, id: any){
    return this.http.put<any>(`http://localhost:3000/posts/${id}`, user)
     .pipe(map((res:any)=>{
        return res;
      }))
  }
  deleteUser(id: number){
    return this.http.delete<any>(`http://localhost:3000/posts/${id}`)
     .pipe(map((res:any)=>{
        return res;
      }))
  }
   deleteAllUsers(){
     return this.http.delete<any>('http://localhost:3000/posts')
      .pipe(map((res:any)=>{
        return res;
      }))
  }


}
