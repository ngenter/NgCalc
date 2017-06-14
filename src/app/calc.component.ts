import { Component } from '@angular/core';

@Component({
  selector: 'calc',
  templateUrl: './calc.component.html'
})

export class CalcComponent {
  
  name: string;
  input1: number;
  input2: number;
  answer: number = null;
  total: number; 

  addition(){
    var total = (this.input1 + this.input2)
    console.log(total)   
    this.answer = total  
  }

  subtraction(){
    var total = (this.input1 - this.input2)
    console.log(total)
    this.answer = total
  }

  test(){
    var total = this.input1 - this.input2
    console.log(total)
    this.answer = total
  }

  multiplication(){
    var total = this.input1 * this.input2
    console.log(total)
    this.answer = total
  }

  division(){
    var total = this.input1 / this.input2
    console.log(total)
    this.answer = total
  }

  clear(){
    this.input1 = null;
    this.input2 = null;
    this.answer = null
  }
}