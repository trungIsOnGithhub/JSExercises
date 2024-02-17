import { Component, OnInit } from '@angular/core';
import Movie from '../models/Movie';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies? : Movie[];
  theatreMovies? : Movie[];
  trendingMovies? : Movie[];

  imageWidth : number = 50;
  imageHeight : number = 80;

  constructor(private router : Router, private httpClient : HttpClient) {}

  ngOnInit(): void {
    this.getTheatreMovies();
    this.getPopularMovies();
    this.getTrendingMovies();
  }

  private getTheatreMovies() {
    this.httpClient.get("http://localhost:4200/assets/data/theatre-movies.json")
    .subscribe(movies => {
      this.theatreMovies = movies as Movie[];
    })
  }

  private getTrendingMovies() {
    this.httpClient.get("http://localhost:4200/assets/data/trending-movies.json")
    .subscribe(movies => {
      this.trendingMovies = movies as Movie[];
    })
  }

  private getPopularMovies() {
    this.httpClient.get("http://localhost:4200/assets/data/popular-movies.json")
    .subscribe(movies => {
      this.popularMovies = movies as Movie[];
    })
  }

  goToMovie(type : string, id : number) { 
    this.router.navigate(['movie', type, id])
  }
}
