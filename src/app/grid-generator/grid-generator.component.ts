import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-generator',
  templateUrl: './grid-generator.component.html',
  styleUrls: ['./grid-generator.component.css']
})
export class GridGeneratorComponent implements OnInit {

  grid: Array<any> = [];
  gridObs: Observable<any>;

  constructor(private gridService: GridService) { }

  ngOnInit() {
    this.gridObs = this.gridService.gridObs;
    this.gridService.gridObs.subscribe(data => this.grid = data);
  }

  addRow() {
    this.gridService.addRow();
  }

  addCol(rowID, componentType) {
    this.gridService.addCol(rowID, componentType);
  }

}
