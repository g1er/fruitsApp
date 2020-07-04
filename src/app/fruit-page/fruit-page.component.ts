import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-fruit-page',
  templateUrl: './fruit-page.component.html',
  styleUrls: ['./fruit-page.component.css']
})
export class FruitPageComponent implements OnInit {

  id: string;
  name: string;
  color: string;
  size: string;
  hash: string;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.size = this.route.snapshot.queryParams['size'];
    this.hash = this.route.snapshot.fragment;

    this.route.params.subscribe((paramsInfo: Params) => {
      this.id = paramsInfo['id'];
      this.name = paramsInfo['name'];
    })

    this.route.queryParams.subscribe((newParams: Params) => {
      this.color = newParams['color'];
      this.size = newParams['size'];
    })
  }

  openPlumPage(){
    this.router.navigate(["/fruits", 7, "Plum"], {
      queryParams: {
        color: "purple",
        size: "normal"
      }
    })
  }

}
