export interface ColAttrs {
  id: number;
  rowID: number;
  componentType: number;
  componentContent: string;
}

export interface RowAttrs {
  id: number;
  order: number;
  options?: string;
}

export class PageTemplate {
  rows: Array<RowAttrs> = [];
  cols: Array<ColAttrs> = [];

  constructor(
    private id: number,
    private templateName: string,
    private templateType: string
  ) {}

  addRow(rowAttrs: RowAttrs) {
    this.rows.push(rowAttrs);
  }

  addCol(colAttrs: ColAttrs) {
    this.cols.push(colAttrs);
  }
}
