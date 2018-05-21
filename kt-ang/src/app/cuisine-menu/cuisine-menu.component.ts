import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuisine-menu',
  templateUrl: './cuisine-menu.component.html',
  styleUrls: ['./cuisine-menu.component.css']
})
export class CuisineMenuComponent implements OnInit {

  cuisineName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data => {
        this.cuisineName = data['cuisinename'];
      }
    );
  }

}
