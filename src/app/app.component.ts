import { Component } from '@angular/core';
import { RequestsService } from './services/requests.service';
import { Observable } from 'rxjs';
import { TopNews } from './model/top-news';
import { Story } from './model/story';
import { Crypto } from './model/crypto';

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
  cryptoCurrencies: string[] = [
    'bitcoin',
    'ethereum',
    'stellar',
    'ripple',
    'dogecoin',
    'uniswap',
    'monero',
    'solana',
    'matic-network',
    'tezos',
    'binancecoin',
    'cardano',
  ];
  cryptoData: Crypto[] = [];

  constructor(private requests: RequestsService) {}

  ngOnInit() {
    this.showNews();
    this.getCurrenciesID();
    console.log(this.cryptoData);
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

  getCurrenciesID() {
    this.cryptoCurrencies.forEach((id: string) => {
      this.showCurrencies(id);
    });
  }

  showCurrencies(id: string) {
    this.requests.getCurrencies(id).subscribe((data: any) => {
      this.cryptoData.push(data);
    });
  }
}
