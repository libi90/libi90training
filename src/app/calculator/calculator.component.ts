import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  //value1:number=10
  //value2:number=20
  value1:string=''
   value2:string
  sum:number
  

  ngOnInit(): void {
  }
  add(){
    //this.sum=this.value1+this.value2
   this.sum=parseInt(this.value1)+parseInt(this.value2)
  }
 // getEvent(e){
    //console.log("function called")

  }



