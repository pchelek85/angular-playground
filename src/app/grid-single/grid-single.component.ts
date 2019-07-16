import { Component, OnInit, Input } from '@angular/core';
import { GridService } from '../services/grid.service';

@Component({
  selector: 'app-grid-single',
  templateUrl: './grid-single.component.html',
  styleUrls: ['./grid-single.component.css']
})
export class GridSingleComponent implements OnInit {

  @Input() id: number;

  constructor(private gridService: GridService) { }

  ngOnInit() {
    // console.log(this.id);
  }

  save(content: string) {
    this.gridService.editComponent(this.id, content);
  }

  delete() {
    this.gridService.deleteComponent(this.id);
  }

}
