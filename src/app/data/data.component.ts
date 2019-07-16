import { Component, OnInit } from '@angular/core';
import { PageTemplate, RowAttrs, ColAttrs } from '../page-template.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const attr: RowAttrs = { id: 1, options: 'this is first col' }
    // const pageTemplate: PageTemplate = new PageTemplate(1, 'Homepage');
    // pageTemplate.addRow(attr);

    // console.log(pageTemplate);
  }

}
