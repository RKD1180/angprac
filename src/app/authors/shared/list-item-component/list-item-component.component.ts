import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthorsService } from '../../authors.service';

@Component({
  selector: 'app-list-item-component',
  templateUrl: './list-item-component.component.html',
  styleUrls: ['./list-item-component.component.css']
})
export class ListItemComponentComponent implements OnInit  {
      @Input() authorsData!: any
      @Input() author!: any
      @Output() authorsSkip = new EventEmitter<any>();
      @Output() loadData = new EventEmitter<any>();

      authors:any[] = [];

      constructor(private authService: AuthorsService){}

      ngOnInit() {
        
      }

      onPaginateChange(data: any) {
        this.authorsSkip.emit(data)
      }

      addToFavorite(value: any,i:any) {
        // console.log(value)
      //  const getData =  this.author.find(((it:any,id:any)=> id === i))
      //   console.log(getData);
      //   if (getData?.isFav) {
      //     const data = {
      //     ...value,
          
      //   }
      //   }
        const data = {
          ...value,
          isFav:true
        }
        this.authService.addFavorites(data)
        this.loadData.emit()
      }

   

      
}
