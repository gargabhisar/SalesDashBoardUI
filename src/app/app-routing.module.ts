import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'login', component: UserLoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'books', component: BooksComponent },
      { path: 'bookDetails/:id', component: BookDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
