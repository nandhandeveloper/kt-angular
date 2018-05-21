import { CuisineModel } from './../models/cuisine.model';
import { CuisinesService } from './../services/cuisines.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {

  cuisines: CuisineModel[] = [] ;

  constructor(private cuisinesService: CuisinesService) { }

  ngOnInit() {
    this.cuisinesService.getAllCuisines()
    .subscribe(
      (data) => {
        this.cuisines = data['Items'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
