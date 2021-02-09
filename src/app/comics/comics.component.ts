import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from "../marvel-api.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(public MarvelComics : MarvelApiService) { }
  test:boolean = false;
  comics:any=[];
  ngOnInit(): void {
  }

 


}
