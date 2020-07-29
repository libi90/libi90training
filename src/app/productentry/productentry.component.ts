import { Component, OnInit } from '@angular/core';
import {Product} from '../product' 

@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {
  model:Product

  constructor() { }

  ngOnInit(): void {
    //this.model=new Product("book","b101",100)
    this.model=new Product("","",0)
  }
save()
{
  console.log(this.model)
}
}
