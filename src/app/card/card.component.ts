import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public title:string='Curso Angular';
  public image:string="http://www.brandemia.org/wp-content/uploads/2013/09/youtube_logo_detail.png";
  constructor() { }

  ngOnInit(): void {
  }

}
