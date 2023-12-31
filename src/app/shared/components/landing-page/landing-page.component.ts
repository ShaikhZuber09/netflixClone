import { Component, OnInit } from '@angular/core';
import { IurlObject } from '../../inteface/netflix';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  infoArr: Array<IurlObject> = [{
    imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
    videoUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v',
    class: 1,
    h1: "Enjoy on your TV",
    h2: ' Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
  }, {
    imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    rowReverse: true,
    h1: 'Download your shows to watch offline',
    h2: ' Save your favourites easily and always have something to watch.'
  }, {
    imageUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
    videoUrl: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v',
    class: 2,
    h1: 'Watch everywhere',
    h2: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
  }, {
    imageUrl: 'https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d',
    rowReverse: true,
    h1: 'Create profiles for kids',
    h2: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.'
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
