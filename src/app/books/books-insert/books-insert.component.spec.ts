import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksInsertComponent } from './books-insert.component';

describe('BooksInsertComponent', () => {
  let component: BooksInsertComponent;
  let fixture: ComponentFixture<BooksInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
