import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  openFruitsPage(){
    this.router.navigate(['fruits'], {relativeTo: this.route});
  }

  changeStatus(status: string){
    if(status === 'login'){
      this.auth.logIn()
    } else {
      this.auth.logOut()
    }
  }

}
