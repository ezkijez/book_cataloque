import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../classes/book';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
  providers: [DatePipe]
})


export class BookItemComponent implements OnInit {

  @Input()
  book: Book;

  constructor() { }

  ngOnInit() {
  }

}
