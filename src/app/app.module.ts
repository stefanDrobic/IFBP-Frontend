import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Guard } from './guard/guard';
import { TokenInterceptor } from './services/token.interceptor';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AdminGuard } from './guard/adminGuard';
import { MovieService } from './services/movie.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { MovieItemComponent } from './movie/movie-item/movie-item.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { CommentItemComponent } from './comment/comment-item/comment-item.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { HomeListComponent } from './home/home-list/home-list.component';
import { HomeItemComponent } from './home/home-item/home-item.component';
import { AddHomeItemComponent } from './home/add-home-item/add-home-item.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { ForumListComponent } from './forum/forum-list/forum-list.component';
import { AddForumComponent } from './forum/add-forum/add-forum.component';
import { ForumDetailsComponent } from './forum/forum-details/forum-details.component';
import { ForumItemComponent } from './forum/forum-item/forum-item.component';
import { NgxStarRatingModule } from 'ngx-star-rating';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    MovieListComponent,
    AddMovieComponent,
    MovieItemComponent,
    NavbarComponent,
    FooterComponent,
    MovieDetailsComponent,
    CommentItemComponent,
    CommentListComponent,
    AddCommentComponent,
    HomeListComponent,
    HomeItemComponent,
    AddHomeItemComponent,
    HomeDetailsComponent,
    ForumListComponent,
    AddForumComponent,
    ForumDetailsComponent,
    ForumItemComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    NgxStarRatingModule
   
   
  ],
  providers: [MovieService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}, Guard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
