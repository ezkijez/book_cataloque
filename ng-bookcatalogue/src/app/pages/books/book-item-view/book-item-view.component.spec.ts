import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemViewComponent } from './book-item-view.component';

describe('BookItemViewComponent', () => {
  let component: BookItemViewComponent;
  let fixture: ComponentFixture<BookItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
