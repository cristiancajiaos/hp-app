import { Routes } from '@angular/router';
import { CharactersHome } from './pages/characters-home/characters-home';
import { CharactersStudents } from './pages/characters-students/characters-students';

export const charactersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: CharactersHome,
        pathMatch: 'full',
      },
      {
        path: 'students',
        component: CharactersStudents,
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
