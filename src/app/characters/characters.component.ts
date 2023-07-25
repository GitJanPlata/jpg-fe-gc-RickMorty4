import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit() {
    this.rickMortyService.getCharacters().subscribe((data: any) => {
      const allCharacters = data.results;
  
      // Mezclar la lista de personajes de manera aleatoria
      for (let i = allCharacters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allCharacters[i], allCharacters[j]] = [allCharacters[j], allCharacters[i]];
      }
  
      // Tomar los primeros 6 personajes de la lista mezclada
      this.characters = allCharacters.slice(0, 8);
    });
  }
}