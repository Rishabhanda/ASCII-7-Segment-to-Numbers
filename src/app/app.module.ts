import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { MarcoPoloComponent } from './marco-polo/marco-polo.component';
import { UserStoryOneComponent } from './user-story-one/user-story-one.component';
import { UserStoryTwoComponent } from './user-story-two/user-story-two.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    MarcoPoloComponent,
    UserStoryOneComponent,
    UserStoryTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
