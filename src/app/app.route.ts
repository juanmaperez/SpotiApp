import { Routes, RouterModule } from '@angular/router'

import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';


const appRoutes : Routes = [
    { path: 'home', component : HomeComponent },
    { path: 'artist/:id', component : ArtistComponent },
    { path: 'search', component : SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
] 

export const app_Routing = RouterModule.forRoot(appRoutes)
