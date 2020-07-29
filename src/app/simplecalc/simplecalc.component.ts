import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplecalc',
  templateUrl: './simplecalc.component.html',
  styleUrls: ['./simplecalc.component.css']
})
export class SimplecalcComponent implements OnInit {

  constructor() { }
  
  value1:string=''
  value2:string=''
  result:number=0
  operator:string='';
  ngOnInit(): void {
  }


getValue(num){

    if(this.value1==''){
      this.value1=num
      console.log("num1",this.value1)
    }
    else{
      this.value2=num
      console.log("num2",this.value2)
      this.calculate(this.operator)
    }
}
setOperator(oprtr){
  console.log(oprtr)
  this.operator=oprtr
  if(oprtr=='=')
{
  this.operator='='
}

}
calculate(oprtr){
console.log("calculate function")
console.log(oprtr)
  if(oprtr=='+'){
    this.result=parseInt(this.value1)+parseInt(this.value2)
    console.log(this.result)
    console.log(oprtr)
  }
  if(oprtr=='-'){
    this.result=parseInt(this.value1)-parseInt(this.value2)
  }
  if(oprtr=='*'){
    this.result=parseInt(this.value1)*parseInt(this.value2)
  }
  if(oprtr=='/'){
    this.result=parseInt(this.value1)/parseInt(this.value2)
  }
}
}
  

