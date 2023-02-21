import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  url = "http://localhost/LoanProject/userlist"
  constructor(private http : HttpClient) {
  }
    users(){
      return this.http.get(this.url)
    }
   }
