import { MenuItem} from './menu-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  allMenu: MenuItem[]=[
    {
      item: "Chicken Fingers",
      category: "dinner",
      price: 11.99
    },
    {
      item: "Pizza",
      category: "dinner",
      price: 11.99
    },
    
    {
      item: "Wings",
      category: "sides",
      price: 8.99
    },
    {
      item: "Bread Sticks",
      category: "sides",
      price: 4.99
    },
    {
      item: "Ceasar Salad",
      category: "salads",
      price: 5.99
    },
    {
      item: "Cinnamon Roll",
      category: "dessert",
      price: 8.99
    },
  ];


 getByCategory(Cat:string): MenuItem[]{
  let catNip:MenuItem[] =[]
  this.allMenu.forEach((m) =>{
    if(m.category == Cat){
      catNip.push(m)
    }
  });
  return (catNip)
}
}
