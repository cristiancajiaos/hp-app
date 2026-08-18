import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Character } from '../interfaces/character';

@Service()
export class CharacterService {

  private http = inject(HttpClient);

  charactersCache = new Map<string, Character[]>();
  charactersHouseCache = new Map<string, Character[]>();
  characterIdCache = new Map<string, Character>();

  getCharacters(): Observable<Character[] | undefined> {
    if (this.charactersCache.has('all')) {
      return of(this.charactersCache.get('all'));
    }
    return this.http.get<Character[]>(`/characters`).pipe(
      tap(characters => this.charactersCache.set('all', characters))
    )
  }

  getCharactersByHouse(house: string): Observable<Character[] | undefined> {
    if (this.charactersHouseCache.has(house)) {
      return of(this.charactersHouseCache.get(house));
    }
    return this.http.get<Character[]>(`/characters/house/${house}`).pipe(
      tap(characters => this.charactersHouseCache.set(house, characters))
    )
  }

  getCharacterById(id: string): Observable<Character | undefined> {
    if (this.characterIdCache.has(id)) {
      return of(this.characterIdCache.get(id));
    }
    return this.http.get<Character[]>(`/character/${id}`).pipe(
      map(results => results[0]),
      tap(character => this.characterIdCache.set(id, character))
    )
  }

  getStudentCharacters(): Observable<Character[] | undefined> {
    if (this.charactersCache.has('students')) {
      return of(this.charactersCache.get('students'));
    }
    return this.http.get<Character[]>(`/characters/students`).pipe(
      tap(characters => this.charactersCache.set('students', characters))
    )
  }

  getStaffCharacters(): Observable<Character[] | undefined> {
    if (this.charactersCache.has('staff')) {
      return of(this.charactersCache.get('staff'));
    }
    return this.http.get<Character[]>(`/characters/staff`).pipe(
      tap(characters => this.charactersCache.set('staff', characters))
    )
  }
}
