import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CourseComponent } from './course/course.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FollowersService } from './services/followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HomeRoutingComponent } from './home-routing/home-routing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BinaryComponent } from './binary/binary.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    CourseComponent,
    SignupFormComponent,
    FollowersListComponent,
    HomeRoutingComponent,
    NotFoundComponent,
    ArchiveComponent,
    NavbarComponent,
    DashboardComponent,
    BinaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'archive/:year/:month', component: ArchiveComponent },
      {path: 'signup', component: SignupFormComponent },
      {path: 'courses', component: CourseComponent },
      {path: 'zippy', component: ZippyComponent },
      {path: 'like', component: LikeComponent },
      {path: 'title', component: TitleCaseComponent },
      {path: 'authors', component: AuthorsComponent },
      {path: 'favourite', component: FavoriteComponent },
      {path: 'followers', component: FollowersListComponent },
      {path: 'home', component: HomeRoutingComponent },
      {path: 'binary', component: BinaryComponent },
      {path: '', component: DashboardComponent },
      {path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    AuthorsService,
    FollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
