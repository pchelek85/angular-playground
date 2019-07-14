import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSingleComponent } from './grid-single.component';

describe('GridSingleComponent', () => {
  let component: GridSingleComponent;
  let fixture: ComponentFixture<GridSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
