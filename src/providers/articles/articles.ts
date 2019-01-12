import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
/*
  Generated class for the ArticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesProvider {

  ApiConnect = 'http://localhost:8000/api/articles.json';

    constructor(public http: HttpClient) {
      console.log('Hello MovieApiProvider Provider');
    }
    displayArticle()
    {
      return new Promise(resolve =>
        {
          this.http.get(this.ApiConnect).subscribe(data =>
            {
              resolve(data);
            }, err=>
            {
              console.log(err);
            });
        });
  }
  }
