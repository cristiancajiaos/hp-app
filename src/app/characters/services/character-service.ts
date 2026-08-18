import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Character } from '../interfaces/character';

@Service()
export class CharacterService {

  private http = inject(HttpClient);

  allCharactersCache = new Map<string, Character[]>();

  getCharacters(): Observable<Character[] | undefined> {
    if (this.allCharactersCache.has('all')) {
      return of(this.allCharactersCache.get('all'));
    }
    return this.http.get<Character[]>(`/characters`).pipe(
      tap(characters => this.allCharactersCache.set('all', characters))
    )
  }

  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`/characters/house/${house}`);
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character[]>(`/character/${id}`).pipe(
      map(results => results[0])
    )
  }

  getStudentCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`/characters/students`);
  }

  getStaffCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`/characters/staff`);
  }
}
