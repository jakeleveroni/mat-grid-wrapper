import { Component } from '@angular/core';

import {
  leftSidenavAndHeader,
  noHeaderNoSidenav,
  rightSidenavAndHeaderWithSingleContentArea,
  noHeaderWithSidenav,
} from './components/custom-grid/grid-examples';
import {MatGrid} from './models/mat-grid-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox';
  public testGrids: MatGrid[];

  constructor() {
    this.testGrids = [
      new MatGrid(leftSidenavAndHeader),
      new MatGrid(noHeaderNoSidenav),
      new MatGrid(rightSidenavAndHeaderWithSingleContentArea),
      new MatGrid(noHeaderWithSidenav),
    ];
  }
}
