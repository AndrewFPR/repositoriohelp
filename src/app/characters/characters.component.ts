import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from "../marvel-api.service";



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

characters:any;
  constructor(private MarvelService: MarvelApiService) { }


  ngOnInit(): void {
  this.showHeros();
  }

showHeros(){
  this.characters = this.MarvelService.getHeros()
}

}