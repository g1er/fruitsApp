import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';

@Component({
  selector: 'app-fruits-page',
  templateUrl: './fruits-page.component.html',
  styleUrls: ['./fruits-page.component.css']
})
export class FruitsPageComponent implements OnInit {
  fruits = [];

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() {
    this.fruits = this.fruitsService.fruits;
  }

}
