import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map} from 'rxjs';
import { CharacterService } from '../../services/character-service';
import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Loading } from '../../../shared/components/loading/loading';
import { CharacterResult } from '../../components/character-result/character-result';

@Component({
  selector: 'app-characters-house',
  imports: [TitleCasePipe, JsonPipe, Loading, CharacterResult],
  templateUrl: './characters-house.html',
  styleUrl: './characters-house.css',
})
export class CharactersHouse {

  private activatedRoute = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  house = toSignal(
    this.activatedRoute.params.pipe(
      map(({house}) => house)
    )
  );

  charactersFromHouse = rxResource({
    params: () => ({
      house: this.house()
    }),
    stream: ({params}) => {
      return this.characterService.getCharactersByHouse(params.house)
    }
  });


}
