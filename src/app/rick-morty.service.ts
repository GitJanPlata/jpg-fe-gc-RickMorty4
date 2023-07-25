import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`);
  }

  getCharacter(characterId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/${characterId}`);
  }

  setSearchTerm(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }
}