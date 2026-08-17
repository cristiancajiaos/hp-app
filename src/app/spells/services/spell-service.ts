import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Spell } from '../interfaces/spell';
import { environment } from '../../../environments/environment.development';

@Service()
export class SpellService {

  private http = inject(HttpClient);

  getSpells(): Observable<Spell[]> {
    return this.http.get<Spell[]>(`/spells`);
  }
}
