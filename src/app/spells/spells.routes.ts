import { Routes } from "@angular/router";
import { MainSpells } from "./pages/main-spells/main-spells";

export const spellRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: MainSpells,
    pathMatch: 'full'
  }]
}];

export default spellRoutes;
