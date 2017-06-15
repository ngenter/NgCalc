import { Component } from '@angular/core';

enum MathOperation {
  Add,
  Subtract,
  Multiply,
  Divide
}

@Component({
  selector: 'advcalc',
  templateUrl: './advcalc.component.html',
  styles: ['./advcalc.component.css']
})
export class AdvCalcComponent {
  title = "Advanced Calc"

  inputNumber: string = "";

  firstNumber: number;
  secondNumber: number;
  answer: number;

  operation: MathOperation;

  updateInputNumber(number: string) {
    this.inputNumber += number;
  }

  setFirstNumber() {
    this.firstNumber = parseInt(this.inputNumber);
    this.inputNumber = "";
  }

  setSecondNumber() {
    this.secondNumber = parseInt(this.inputNumber);
    this.inputNumber = "";
  }

  add() {
    this.setFirstNumber();
    this.operation = MathOperation.Add;
  }

  subtract() {
    this.setFirstNumber();
    this.operation = MathOperation.Subtract;
  }

  multiply() {
    this.setFirstNumber();
    this.operation = MathOperation.Multiply;
  }

  divide() {
    this.setFirstNumber();
    this.operation = MathOperation.Divide;
  }

  doMath() {
    this.setSecondNumber();

    switch (this.operation) {
      case MathOperation.Add:
        this.answer = this.firstNumber + this.secondNumber;
        break;
      case MathOperation.Subtract:
        this.answer = this.firstNumber - this.secondNumber;
        break;
      case MathOperation.Multiply:
        this.answer = this.firstNumber * this.secondNumber;
        break;
      case MathOperation.Divide:
        this.answer = this.firstNumber / this.secondNumber;
        break;
      default:
        break;
    }
  }
}