import { Component, OnInit } from '@angular/core';
import { NavigatorService } from '@sj/navigator';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit {

  constructor(private navigatorService: NavigatorService) { }

  ngOnInit() {}

  changeNavModel() {
    const routeModel = [
      {
        name: '1',
        path: 'a',
        children: [
          {
            name: '1-1',
            path: '1-1'
          },
          {
            name: '1-2',
            path: '1-2'
          },
          {
            name: '1-3',
            path: '1-3'
          }
        ]
      }
    ];
    this.navigatorService.init(routeModel);
  }

}
