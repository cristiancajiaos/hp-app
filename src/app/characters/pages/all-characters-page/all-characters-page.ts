import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Loading } from '../../../shared/components/loading/loading';
import { CharacterResults } from '../../components/character-results/character-results';

@Component({
  selector: 'app-all-characters-page',
  imports: [Loading, CharacterResults],
  templateUrl: './all-characters-page.html',
  styleUrl: './all-characters-page.css',
})
export class AllCharactersPage {

  private characterService = inject(CharacterService);

  allCharacters = rxResource({
    params: () => {
      return {foo: 'foo'};
    },
    stream: (params) => {
      return this.characterService.getCharacters();
    }
  });
}
