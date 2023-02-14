import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';
import '@angular/localize/init';


@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }

  paginationValue:any

  handlepaginationValue(data:any) {
    this.paginationValue = data
  }

  getAuthors(): Observable<any>{
    return this.http.get(`https://api.quotable.io/authors?limit=${10* this.paginationValue?.pageIndex}&skip=20`)
  }
}
