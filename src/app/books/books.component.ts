import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  writing = [
    {
      author: 'Bryan A. Garner',
      title: 'Legal Writing in Plain English',
      title_url: 'https://press.uchicago.edu/ucp/books/book/chicago/L/bo199200593.html',
      year: '2023'
    },
  ];
  psychology = [
    {
      author: 'Wendy Behary',
      title: 'Disarming the Narcissist',
      title_url: 'https://disarmingthenarcissist.com/',
      year: '2021'
    },
    {
      author: 'Diane Poole Heller',
      title: 'The Power of Attachment',
      title_url: 'https://traumasolutions.com/power-attachment-book/',
      year: '2019'
    },
    {
      author: 'Peter Levine',
      title: 'Trauma and Memory',
      title_url: 'https://www.goodreads.com/en/book/show/24683741',
      year: '2015'
    },
    // {
    //   author: 'Jeffrey Young, Janet Klosko, Marjorie Weishaar',
    //   title: 'Schema Therapy',
    //   title_url: 'https://www.schematherapy.com/',
    //   year: '2003'
    // },
  ];
  law = [
    {
      author: 'Joel Trachtman',
      title: 'The Tools of Argument',
      title_url: 'https://www.goodreads.com/en/book/show/19289132',
      year: '2013'
    },
  ];
}
