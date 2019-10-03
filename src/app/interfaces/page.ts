import { Acids } from '../interfaces/acids';

export class Page{
    count: number;      // total number of items
    next: string;       // URL of the next page
    previous: string;   // URL of the previous page
    results: Acids[];  // items for the current page
  }
