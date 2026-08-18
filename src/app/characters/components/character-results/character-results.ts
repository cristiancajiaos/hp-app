import { Component, input } from '@angular/core';
import { CharacterResult } from '../character-result/character-result';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character-results',
  imports: [CharacterResult],
  templateUrl: './character-results.html',
  styleUrl: './character-results.css',
})
export class CharacterResults {

  characters = input.required<Character[]>();
}
