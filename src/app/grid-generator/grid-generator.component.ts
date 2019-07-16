import { Component, OnInit } from '@angular/core';
import { GridService } from '../services/grid.service';
import { Observable } from 'rxjs';
import { PageTemplate } from '../page-template.model';

@Component({
  selector: 'app-grid-generator',
  templateUrl: './grid-generator.component.html',
  styleUrls: ['./grid-generator.component.css']
})
export class GridGeneratorComponent implements OnInit {

  template: PageTemplate;
  template$: Observable<PageTemplate>;

  constructor(private gridService: GridService) { }

  ngOnInit() {
    this.template$ = this.gridService.template$;
    this.gridService.template$.subscribe(data => this.template = data);
  }

  generateTemplate(templateName: string, templateType: string) {
    this.gridService.generateTemplate(templateName, templateType);
  }

  addTemplateRow() {
    this.gridService.addTemplateRow();
  }

  addTemplateCol(rowID: number, componentType: string) {
    const componentTypetoNumber = Number(componentType);
    const componentContent = '';
    this.gridService.addTemplateCol(rowID, componentTypetoNumber, componentContent);
    // console.log(rowID, componentTypetoNumber, componentContent);
  }

  viewComponentsForRow(rowID) {
    return this.template.cols.filter(data => data.rowID === rowID);
  }

}
