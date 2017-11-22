import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pero',
  templateUrl: './pero.component.html',
  styleUrls: ['./pero.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PeroComponent {

  @Input('marko') marko;
  @Output() change = new EventEmitter();

  books;


  tweet = {
    body: '...',
    likesCount: 999,
    isLiked: false
  }

  ivan() {
    console.log("klik se dogodio")
    this.change.emit();
  }

  addBook() {
    this.books.push({
      name: "Nova Knjiga",
      autor: "Novi Autor"
    })
  }

  removeBook(book) {
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

  loadBooks(){
    this.books = [
      {
        name: "Ivan i pero",
        autor: "ivana brdsfgsdfgdfglić"
      },
      {
        name: "Ivasdfo",
        autor: "ivdfglić"
      },
      {
        name: "Iasdfasdfo",
        autor: "ivana brlić"
      }, {
        name: "234234 i pero sdg sdfg",
        autor: "ivana brlić"
      }
    ]
  }


  trackNewBooks(index, book){
    return book ? book.name : undefined;
  }



}
