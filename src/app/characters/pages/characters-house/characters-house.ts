import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, tap} from 'rxjs';
import { CharacterService } from '../../services/character-service';
import { TitleCasePipe } from '@angular/common';
import { Loading } from '../../../shared/components/loading/loading';
import { CharacterResults } from '../../components/character-results/character-results';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-characters-house',
  imports: [TitleCasePipe, Loading, CharacterResults],
  templateUrl: './characters-house.html',
  styleUrl: './characters-house.css',
})
export class CharactersHouse {

  private activatedRoute = inject(ActivatedRoute);
  private characterService = inject(CharacterService);
  private title = inject(Title);

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
      this.title.setTitle(
        `Characters from the ${params.house.slice(0,1).toUpperCase().concat(params.house.slice(1).toLowerCase())} house`
      );
      return this.characterService.getCharactersByHouse(params.house)
    }
  });


}
