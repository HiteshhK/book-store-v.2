import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../Model/Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  book!: Book;
  @Input('book') set setBook(value: Book) {
    this.book = value;
  }
  constructor() {}
  @Output() onSave = new EventEmitter<Book>();
  ngOnInit() {}

  isFormInValid() {
    if (
      !(
        this.book?.id &&
        this.book?.cost &&
        this.book?.name &&
        this.book?.genre &&
        this.book?.quantity
      )
    ) {
      return true;
    }
    return false;
  }
  saveDetails() {
    this.onSave.emit(this.book);
  }
}
