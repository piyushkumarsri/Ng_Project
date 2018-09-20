import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 // items=[,,'assets/pqr.jpg','assets/xyz.jpg','assets/vivo.jpg'];
 // items=[,,'assets/pqr.jpg','assets/xyz.jpg','assets/vivo.jpg'];
 customers=[];
  constructor() { 
   // for (let i = 0; i < 20; i++){
    this.customers.push({
      name:"Emoniction ballons",
      address:"Noida",
      img:'assets/appo.jpg'
    });
    this.customers.push({
      name:"Green ballon",
      address:"Noida2",
      img:'assets/abc.jpg'
    });
    this.customers.push({
      name:faker.commerce.productName(),
      address:faker.commerce.department(),
      img:faker.image.food()
    })}
 // }
  

  ngOnInit() {
  }

}
