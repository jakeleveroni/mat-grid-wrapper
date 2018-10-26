import {Component, OnInit, Input} from '@angular/core';
import {MatGrid} from '../../models/mat-grid-config.model';

import {
  leftSidenavAndHeader,
  noHeaderNoSidenav,
  rightSidenavAndHeaderWithSingleContentArea
} from './grid-examples';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  @Input() config: MatGrid;

  constructor() {
  }
    

  public ngOnInit() {
  }
}
