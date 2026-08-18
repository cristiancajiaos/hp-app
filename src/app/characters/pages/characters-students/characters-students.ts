import { Component, inject } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Loading } from '../../../shared/components/loading/loading';
import { CharacterResults } from '../../components/character-results/character-results';

@Component({
  selector: 'app-characters-students',
  imports: [Loading, CharacterResults],
  templateUrl: './characters-students.html',
  styleUrl: './characters-students.css',
})
export class CharactersStudents {

  private characterService = inject(CharacterService);

  charactersStudents = rxResource({
    params: () => {
      return {foo: 'foo'}
    },
    stream: (params) => {
      return this.characterService.getStudentCharacters();
    }
  });
}
