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



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    MovieListComponent,
    AddMovieComponent,
    MovieItemComponent,
    NavbarComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule
   
   
  ],
  providers: [MovieService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}, Guard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
