import { Component, OnInit, Input } from '@angular/core';
import { GridService } from '../services/grid.service';

@Component({
  selector: 'app-grid-single',
  templateUrl: './grid-single.component.html',
  styleUrls: ['./grid-single.component.css']
})
export class GridSingleComponent implements OnInit {

  @Input() rowID;
  @Input() colID;

  constructor(private gridService: GridService) { }

  ngOnInit() {
    console.log(this.colID);
    console.log(this.rowID);
  }

  save(content) {
    const rowID = this.rowID;
    const colID = this.colID;
    this.gridService.editComponent(content, rowID, colID);
  }

}
