import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'main',
  loadChildren: () => import('./main/main.routes')
}, {
  path: '**',
  redirectTo: '/main'
}];
