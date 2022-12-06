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

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get(this.topStoriesURL);
  }

  getStory(id: any) {
    return this.http.get(this.storyDetailsURL + id + '.json');
  }
}
