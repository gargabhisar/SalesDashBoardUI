import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BooksModel } from '../Models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  private base_url = "http://localhost:8009/";
  private UserLogin_url = "Login/AuthorLogin";
  private Dashboard_url = "Dashboard/DashboardDetails";
  private Books_url = "Books/GetMyBooks";
  private BookDetails_url = "Books/BookDetails"

  constructor(private http: HttpClient) { }

  getToken() {
    let result = JSON.parse(sessionStorage.getItem('result') || '{}');
    return result.token;
  }

  login(logindetails: any) {
    let obs = this.http.post(this.base_url + this.UserLogin_url, logindetails);
    return obs;
  }

  getDashboard() {
    let obs = this.http.get(this.base_url + this.Dashboard_url);
    return obs;
  }

  getMyBooks() {
    let obs = this.http.get(this.base_url + this.Books_url);
    return obs;
  }

  getBookDetails(BookId: any) {
    let url = this.base_url + this.BookDetails_url;
    let obs = this.http.post<BooksModel>(url, BookId);
    return obs;
  }
}
