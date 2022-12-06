import { Component } from '@angular/core';
import { RequestsService } from './services/requests.service';
import { Observable } from 'rxjs';
import { TopNews } from './model/top-news';
import { Story } from './model/story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'papr';
  quote = "All the News That's Fit to Print";
  storiesData: [] = [];
  storyLinks: Story[] = [];

  constructor(private requests: RequestsService) {}

  ngOnInit() {
    this.showNews();
  }

  showNews() {
    this.requests.getNews().subscribe((data: any) => {
      this.storiesData = data.slice(0, 10);
      this.storiesData.forEach((id: number) => {
        this.showStory(id);
      });
      console.log(this.storyLinks);
    });
  }

  showStory(id: number) {
    this.requests.getStory(id).subscribe((data: any) => {
      this.storyLinks.push(data);
    });
  }
}
