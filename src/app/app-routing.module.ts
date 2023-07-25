import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: 'cards', component: CardsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'characters', component: CharactersComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'about-us', component: AboutUsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'character/:id', component: DetailsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'search', component: SearchComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: '', pathMatch:'full', redirectTo:'/cards'},
  { path: '**', component: CardsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

