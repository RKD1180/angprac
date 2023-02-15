import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit  {
    constructor(private authService: AuthorsService){}
    
    authors!: any 
    skipValue:number = 20
    authorsData:any[] = []
    // authors:any | undefined

    ngOnInit(): void {
      this.getAuthors(this.skipValue)
    }

    getNewAuthors(value:any){
      this.getAuthors(value.pageIndex +1)
      console.log(this.authors);
    }

    getAuthors(skip:any){
      const favorites = JSON.parse(localStorage.getItem("favorites") || '')
      this.authService.getAuthors(skip).subscribe(data =>{
        this.authors = data
        const val =  data.results.map((item:any) =>{
          for(let fvAuth of favorites){
            if (fvAuth._id === item._id) {
              item = {...item,isFav : true}
            }
          }
          return item
        })
        this.authorsData = val
        console.log(val);
      })
      
    }

    loadAuthors(){
      this.getAuthors(this.skipValue)
      console.log(this.authorsData);
      
    }
}
