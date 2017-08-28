'use strict'

/**
 * *** JS Pseudoclassical ***
 * 
 * 
 */

let Calculation = function(number1, number2){
    this.num1 = number1
    this.num2 = number2
}

Calculation.prototype.sum = function() {
    return this.num1 + this.num2
}

Calculation.prototype.substract = function() {
    return Math.abs(this.num1 - this.num2)
}

let result = new Calculation(1, 2)

document.write(String(result.num1)  + " + " + String(result.num2) + " = " + result.sum())
document.write(String(result.num1)  + " - " + String(result.num2) + " = " + result.substract())