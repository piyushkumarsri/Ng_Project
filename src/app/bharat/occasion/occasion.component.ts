// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-occasion',
//   templateUrl: './occasion.component.html',
//   styleUrls: ['./occasion.component.css']
// })
// export class OccasionComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
   // selector: 'app-product-listing',
   // templateUrl: './product-listing.component.html'
    selector: 'app-occasion',
   templateUrl: './occasion.component.html',
   styleUrls: ['./occasion.component.css']

})
//export class ProductListingComponent {
  export class OccasionComponent  {
    products = [];

    constructor() {
        console.log("Preparing product list");
        for (let i = 0; i < 20; i++) {
            this.products.push({
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                department: faker.commerce.department(),
                color: faker.commerce.color(),
                product: faker.commerce.product(),
                //image: i%2===0? faker.image.food():"assets/images/abstract.jpeg"
                //img: faker.commerce.food()
                image: faker.image.food()
            });
        }
        
    }

}