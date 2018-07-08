
import { Injectable } from '@angular/core';

import { Http, Response} from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Article } from './../Models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(
    private http: HttpClient
  ) { }

  getArticles() {
    return this.http.get<Article[]>(this.apiUrl);
  }

  createArticle(article: Article) {
    const json = JSON.stringify(article);
    const post_params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application]/json');
    return this.http.post<Article>(this.apiUrl, article);
  }

  getArticleId(id: number) {
    return this.http.get<Article>(this.apiUrl + '/' + id);
  }

  updateArticle(article: Article) {
    return this.http.put<Article>(this.apiUrl + '/' + article.id , article);
  }

  deleteArticle(id: number) {
    return this.http.delete<Article>(this.apiUrl + '/' + id );
  }

}
