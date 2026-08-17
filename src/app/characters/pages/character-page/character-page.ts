import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character-service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { Loading } from '../../../shared/components/loading/loading';
import { map, switchMap } from 'rxjs';
import { TitleCasePipe } from '@angular/common';
import { SetImagePipe } from '../../../shared/pipes/set-image-pipe';

@Component({
  selector: 'app-character-page',
  imports: [Loading, TitleCasePipe, SetImagePipe],
  templateUrl: './character-page.html',
  styleUrl: './character-page.css',
})
export class CharacterPage {

  private activatedRoute = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  id = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['id'])
    )
  )

  character = toSignal(
    this.activatedRoute.params.pipe(
      switchMap(params => this.characterService.getCharacterById(params['id']))
    )
  )

  characterId = rxResource({
    params: () => {
      return {id: this.id()}
    },
    stream: ({params}) => {
      return this.characterService.getCharacterById(params.id)
    }
  });
}
