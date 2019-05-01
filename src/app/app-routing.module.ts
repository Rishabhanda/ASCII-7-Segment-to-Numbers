import {NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { MarcoPoloComponent } from './marco-polo/marco-polo.component';
import { UserStoryOneComponent } from './user-story-one/user-story-one.component';
import { UserStoryTwoComponent } from './user-story-two/user-story-two.component';


const appRoutes: Routes = [
  {path: '', children: [
    {path: 'marcopolo', component: MarcoPoloComponent},
    {path: 'userstoryone', component: UserStoryOneComponent},
    {path: 'userstorytwo', component: UserStoryTwoComponent},
    {path: '', redirectTo: 'marcopolo', pathMatch: 'full'}
  ]},
  {path: '**', component: PageNotFoundComponent}
];



@NgModule({

imports: [
  RouterModule.forRoot(appRoutes)
],
exports: [
  RouterModule
]
})

export class AppRoutingModule {
}


