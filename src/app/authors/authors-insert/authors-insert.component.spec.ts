import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsInsertComponent } from './authors-insert.component';

describe('AuthorsInsertComponent', () => {
  let component: AuthorsInsertComponent;
  let fixture: ComponentFixture<AuthorsInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
