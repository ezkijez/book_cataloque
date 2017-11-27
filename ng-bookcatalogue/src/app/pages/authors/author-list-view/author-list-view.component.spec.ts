import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListViewComponent } from './author-list-view.component';

describe('AuthorListViewComponent', () => {
  let component: AuthorListViewComponent;
  let fixture: ComponentFixture<AuthorListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
