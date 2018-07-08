import { Article } from './../Models/Article';
import { ArticlesService } from './../servicios/articles.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[];
  public article: Article;


  constructor(
    private articleService: ArticlesService
  ) { }

  createArticle(form: NgForm) {
    // console.log('data insertions');

    // console.log(form.value);


    const newArticle: Article = {
      name: form.value.name,
      description: form.value.description
    };

    this.articleService.createArticle(newArticle).subscribe(
      data => {
        console.log(data);
        this.articles.push(data);
      }
    );
  }

  deleteArticle(art) {
    this.articleService.deleteArticle(art.id).subscribe(
      data => {
        console.log(data);
        const article_id = this.articles.indexOf(art) ;
        this.articles.splice(article_id, 1);
      }
    )
  }


  ngOnInit() {
    this.articleService.getArticles().subscribe(
      data => {
         this.articles = data;

       // console.log(data);

      }
    );
  }

}
