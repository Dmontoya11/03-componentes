import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  favorito: boolean=false;

  like: boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    
    this.like=!this.like;
    
  }

  OnClick() {
    this.favorito=!this.favorito; 
  }

}
