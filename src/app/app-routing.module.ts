import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { AdminGuard } from './guard/adminGuard';
import { Guard } from './guard/guard';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { AddHomeItemComponent } from './home/add-home-item/add-home-item.component';
import { ForumListComponent } from './forum/forum-list/forum-list.component';
import { ForumDetailsComponent } from './forum/forum-details/forum-details.component';
import { AddForumComponent } from './forum/add-forum/add-forum.component';

const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'login', component: UserLoginComponent },
{ path: 'register', component: UserRegisterComponent },
{ path: 'home/add', component: AddHomeItemComponent, canActivate:[ AdminGuard]},
{ path: 'home', component:  HomeListComponent },
{ path: 'forum/add', component:  AddForumComponent, canActivate:[ Guard ]},
{ path: 'forum/:name', component:  ForumDetailsComponent },
{ path: 'forum', component:  ForumListComponent },
{path: 'home/:name', component:HomeDetailsComponent},
{ path: 'event/list', component: MovieListComponent },
{ path: 'event/add', component: AddMovieComponent, canActivate:[ Guard]},
{path: 'event/:name', component:MovieDetailsComponent},
{ path: '**', component: MovieListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
