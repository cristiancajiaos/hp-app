import { Routes } from '@angular/router';
import { CharactersHome } from './pages/characters-home/characters-home';
import { CharactersStudents } from './pages/characters-students/characters-students';
import { CharactersHouse } from './pages/characters-house/characters-house';
import { CharactersStaff } from './pages/characters-staff/characters-staff';

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
        path: 'house/:house',
        component: CharactersHouse,
        pathMatch: 'full',
      },
      {
        path: 'staff',
        component: CharactersStaff,
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
