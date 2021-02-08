import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from "../marvel-api.service";



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

characters:any=[];

pages:number =1;
  constructor(public MarvelService: MarvelApiService) { }


  ngOnInit(): void {
  this.showHeros();

}

showHeros(){
  this.MarvelService.getHeros().subscribe(
    (    characters: any)=>{
     console.log( this.characters = characters);
    }
  );


}
}

