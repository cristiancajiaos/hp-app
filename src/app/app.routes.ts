import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'main',
  loadChildren: () => import('./main/main.routes')
}, {
  path: 'spells',
  loadChildren: () => import('./spells/spells.routes')
},{
  path: 'characters',
  loadChildren: () => import('./characters/characters.routes')
},{
  path: '**',
  redirectTo: '/main'
}];
