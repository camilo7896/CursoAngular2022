import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  numero:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Mi primer App';

  public ArregloTarjetas : Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas=[
      {titulo:'Video1',subtitulo:'Subtitulo Video 1',numero:5},
      {titulo:'Video2',subtitulo:'Subtitulo Video 2',numero:6},
      {titulo:'Video3',subtitulo:'Subtitulo Video 3',numero:7}

    ]
  }

}
