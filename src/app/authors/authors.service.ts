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

  favoriteAuthors:any [] = []

  addFavorites(value:any) {
    this.favoriteAuthors.push(value)
    localStorage.setItem('favorites', JSON.stringify(this.favoriteAuthors))
  }

  getAuthors(value:any): Observable<any>{
    return this.http.get(`https://api.quotable.io/authors?limit=10&skip=${value}`)
  }
}
