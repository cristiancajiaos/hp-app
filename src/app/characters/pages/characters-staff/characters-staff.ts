import { Component, inject } from '@angular/core';
import { Loading } from '../../../shared/components/loading/loading';
import { CharacterResults } from '../../components/character-results/character-results';
import { rxResource } from '@angular/core/rxjs-interop';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-characters-staff',
  imports: [Loading, CharacterResults],
  templateUrl: './characters-staff.html',
  styleUrl: './characters-staff.css',
})
export class CharactersStaff {

  private characterService = inject(CharacterService);

  charactersStaff = rxResource({
    params: () => {
      return {foo: 'foo'};
    },
    stream: (params) => {
      return this.characterService.getStaffCharacters();
    }
  });
}
