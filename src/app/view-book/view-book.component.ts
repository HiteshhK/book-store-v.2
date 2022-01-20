import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../Model/Book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  @Input() books: Book[] = [];
  @Output() action = new EventEmitter<{
    action: 'view' | 'edit' | 'delete';
    book: Book;
  }>();
  selectedBook!: Book;
  showBook = false;
  constructor() {}

  ngOnInit() {}

  bookAction(action: 'view' | 'edit' | 'delete', book: Book) {
    this.action.emit({ action, book });
    if (action === 'view') {
      this.selectedBook = book;
      this.showBook = true;
    }
  }
}
