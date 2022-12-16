import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book.model';
import { BookRepository } from 'src/app/model/book.repository';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
})
export class BookEditorComponent implements OnInit {

  editing = false;
  book:Book = new Book();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private repository: BookRepository,
    private router:Router,
    activateRoute: ActivatedRoute) 
    {
      this.editing = activateRoute.snapshot.params.mode ==='edit';
      if(this.editing)
      {
        Object.assign(this.book, repository.getBook(activateRoute.snapshot.params.id));
      }
    }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  save(form :NgForm):void
  {
    this.repository.saveBook(this.book);
    this.router.navigateByUrl('/admin/main/books');
  }

}
