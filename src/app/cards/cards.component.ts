import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  characters: any[] = [];
  searchTerm: string = '';

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit() {
    this.rickMortyService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }

  
}