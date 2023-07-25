import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

interface Character {
  name: string;
  image: string;
  id: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  searchResults: Character[] = [];

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.rickMortyService.searchTerm$.subscribe(searchTerm => {
      this.searchTerm = searchTerm;
      this.filterResults();
    });
  }

  filterResults() {
      this.rickMortyService.getCharacters().subscribe(data => {
      if (data && data.results) {
        const filteredResults = data.results.filter((character: Character) =>
          character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.searchResults = filteredResults;
      }
    });
  }
}