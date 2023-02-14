import { Component, Input, OnInit } from '@angular/core';
import { AuthorsService } from '../../authors.service';

@Component({
  selector: 'app-list-item-component',
  templateUrl: './list-item-component.component.html',
  styleUrls: ['./list-item-component.component.css']
})
export class ListItemComponentComponent implements OnInit  {
      @Input() authorsData!: any
      

      constructor(private authService: AuthorsService){}

      ngOnInit() {
        this.authService.paginationValue
      }

      onPaginateChange(data: any) {
        this.authService.handlepaginationValue(data)
        console.log(this.authService.paginationValue);
        
      }
      
}
