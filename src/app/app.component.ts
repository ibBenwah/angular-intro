import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title: string = 'My First Angular App';

 hideTitle: boolean = false;

 appInput: string = "";

 animal:string = "INSERT ANIMAL";
 verb:string = "INSERT VERB";

 isHungry: boolean = true;

 names: string[] = ["Garret", "Holly", "Matt", "Tyler", "Sam"];

 foods: string[] = ["Pizza", "Steak", "Fish", "Hamburger"];

 books: Book[] = [
  {
    title: "Cat in the Hat",
    pageCount: 61
  },
  {
    title: "Atomic Habits",
    pageCount: 320
  }
 ];


 methodThatReturnsArray(): number[] {
  return[99, 22, 55, 5, 19];
 }
}
