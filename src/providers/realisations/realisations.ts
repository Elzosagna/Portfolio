import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class RealisationsProvider {
ApiConnect = 'http://localhost:8000/api/realisations.json';

  constructor(public http: HttpClient) {
    console.log('Hello RealisationsProvider Provider');
  }
  displayRealisation()
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
