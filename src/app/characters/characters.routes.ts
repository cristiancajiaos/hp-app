import { Routes } from '@angular/router';
import { CharactersHome } from './pages/characters-home/characters-home';
import { CharactersStudents } from './pages/characters-students/characters-students';
import { CharactersHouse } from './pages/characters-house/characters-house';
import { CharactersStaff } from './pages/characters-staff/characters-staff';
import { CharacterPage } from './pages/character-page/character-page';

export const charactersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: CharactersHome,
        title: 'Which characters do you want to find?',
        pathMatch: 'full',
      },
      {
        path: 'students',
        component: CharactersStudents,
        title: 'Characters who are students',
        pathMatch: 'full',
      },
      {
        path: 'house/:house',
        component: CharactersHouse,
        title: 'Characters from house',
        pathMatch: 'full',
      },
      {
        path: 'staff',
        component: CharactersStaff,
        title: 'Characters who are part of the staff of Hogwarts',
        pathMatch: 'full',
      },
      {
        path: ':id',
        component: CharacterPage,
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ],
  }
];

export default charactersRoutes;
