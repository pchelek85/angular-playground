import { Injectable } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  grid = [];
  gridObs = new Subject<Array<any>>();

  constructor() { }

  addRow() {
    const length = this.grid.length;
    this.grid.push({
      rowID: length,
      cols: [],
      options: ''
    });
    this.gridObs.next(this.grid);
  }

  addCol(rowID, componentType, componentContent?) {
    const newItem = {
      colID: this.grid[rowID].cols.length,
      componentType: componentType,
      componentContent: ''
    }
    const selectedRow = this.grid[rowID].cols;
    selectedRow.push(newItem);
  }

  editComponent(content, rowID, colID) {
    const componentID = this.grid[rowID].cols[colID];
    componentID.componentContent = content;
  }
}
