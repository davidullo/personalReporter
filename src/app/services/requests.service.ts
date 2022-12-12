import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  storyDetailsURL = 'https://hacker-news.firebaseio.com/v0/item/';
  coingeckoURL = 'https://api.coingecko.com/api/v3/coins/';

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.topStoriesURL);
  }

  getStory(id: number) {
    return this.http.get(this.storyDetailsURL + id + '.json');
  }

  getCurrencies(id: string) {
    return this.http.get(this.coingeckoURL + id);
  }
}
