import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PageTemplate, RowAttrs, ColAttrs } from '../page-template.model';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  template: PageTemplate;
  template$ = new Subject<PageTemplate>();

  constructor() { }

  generateTemplate(templateName: string,templateType: string): void {
    const randomID = Math.floor(Math.random() * 100000000000);
    this.template = new PageTemplate(randomID, templateName, templateType);
    this.template$.next(this.template);
    // console.log(this.template);
  }

  addTemplateRow(): void {
    const ID = this.template.rows.length + 1;
    const order = this.template.rows.length + 1;
    const attr: RowAttrs = { id: ID, order: order, options: 'custom options for row: margins, paddings' }
    this.template.addRow(attr);
    this.template$.next(this.template);
    // console.log(this.template);
  }

  addTemplateCol(rowID: number, componentType: number, componentContent: string): void {
    const newComponent: ColAttrs = {
      id: this.template.cols.length + 1,
      rowID: rowID,
      componentType: componentType,
      componentContent: componentContent
    }
    this.template.addCol(newComponent);
    this.template$.next(this.template);
  }

  editComponent(id: number, content: string): void {
    const component = this.template.cols.find(data => data.id === id);
    component.componentContent = content;
  }

  deleteComponent(id: number): void {
    const componentToDelete = this.template.cols.findIndex(data => data.id === id);
    this.template.cols.splice(componentToDelete, 1);
  }


}
