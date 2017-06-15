import { Component } from '@angular/core';

@Component({
  selector: 'advcalc',
  templateUrl: './advcalc.component.html',
  styles: ['./advcalc.component.css']
})

export class AdvCalcComponent {
  title = "Advanced Calc"
  inputNumber: number;
  firstNumber: number = 0;
  
  addition(){
    console.log("you used the addition method")
    console.log("this.inputNumber is of value: ", this.inputNumber)
    console.log("this.inputNumber is of type: ", typeof(this.inputNumber))
    this.inputNumber = this.firstNumber
    console.log("firstNumb is of type: " + typeof(this.firstNumber))

    



    
  }


}