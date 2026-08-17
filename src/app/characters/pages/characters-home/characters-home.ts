import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-characters-home',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './characters-home.html',
  styleUrl: './characters-home.css',
})
export class CharactersHome {

  houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
}
