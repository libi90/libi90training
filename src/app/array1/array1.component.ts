import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  condition=true
  condition1=false
  colors:string
color:string[]=["red","blue","pink","green"]
}
// check()
// {
//   console.log(this.color)
// }