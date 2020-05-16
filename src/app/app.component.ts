import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigatorService } from '@sj/navigator';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private navigatorService: NavigatorService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('assets/navigator-route-model.json')
      .pipe(first())
      .subscribe((data: any) => {
        this.navigatorService.init(data);
      });


    console.log(this.router.config);
  }

  signOutClicked() {
    alert('signed out');
  }

  navigate(route: string) {
    console.log(route);
    this.router.navigate([route], {relativeTo: this.activatedRoute});
  }
}
