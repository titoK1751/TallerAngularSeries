import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  standalone: false
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0;
  selectedSerie: Serie | null = null;
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }


  calculateAverageSeasons(){
    var totalSeasons: number = 0;

    this.series.forEach(serie => {
      totalSeasons += serie.seasons;
    });
    this.averageSeasons = totalSeasons / this.series.length;
  }

  selectSerie(serie: Serie){
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
