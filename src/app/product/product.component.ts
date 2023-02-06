import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{

  products=[{
    name:"Ipphone",
    price:60000,
    describe:"This is best and cost worthy phone in the world"
  },
  {
    name:"Samsung",
    price:50000,
    describe:"THis is the best Andriod phone which is existing in the planet."
  }
]
  share(){
    // console.log("Thankyou for sharing this item")
    alert("Thankyou for sharing this item")
  }
  notifyMe(){
    alert("We will get notified you when product in the stock")
  }
}
