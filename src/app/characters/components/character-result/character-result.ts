import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/character';
import { RouterLink } from '@angular/router';
import { SetImagePipe } from '../../../shared/pipes/set-image-pipe';

@Component({
  selector: 'app-character-result',
  imports: [RouterLink, SetImagePipe],
  templateUrl: './character-result.html',
  styleUrl: './character-result.css',
})
export class CharacterResult {

  character = input.required<Character>();
}
