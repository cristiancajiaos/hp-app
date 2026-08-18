import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Spell } from '../interfaces/spell';
import { environment } from '../../../environments/environment.development';

@Service()
export class SpellService {

  private http = inject(HttpClient);

  spellsCache = new Map<string, Spell[]>();

  getSpells(): Observable<Spell[] | undefined> {
    if (this.spellsCache.has('spells')) {
      return of(this.spellsCache.get('spells'));
    }
    return this.http.get<Spell[]>(`/spells`).pipe(
      tap(spells => this.spellsCache.set('spells', spells))
    )
  }
}
