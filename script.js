let numberBtn = document.querySelector('.number')
let operatorBtn = document.querySelector('.operator')
let clearBtn = document.getElementById('clear')
let DelBtn = document.getElementById('delete')
let equalBtn = document.getElementById('evaluate')
let pointBtn = document.getElementById('decimal')
let firstOperand = getElementById('firstOperand')
let secondOperand = getElementById('secondOperand')


class Calculator {

    constructor(firstInput, secondInput){
        this.firstInput = firstInput;
        this.secondInput = secondInput;
        this.clear();
    }

    clear(){
        // sets first number, second number and operator to blank strings and undefined value
        this.firstInput = ''
        this.secondInput = ''
        this.operator = undefined;
    }

    delete(){
        //example of string slicing in JS. deletes the last element.
        // 0 = starting index, -1 = begins at the end of string, slice = gets rid of the char
        this.secondInput = this.secondInput.toString().slice(0, -1);
    }

    addDecimal(decimal){

        if(this.secondInput = ''){
            this.secondInput = this.secondInput.toString() + '0' + decimal.toString();
        } else {
            this.secondInput = this.secondInput.toString() + decimal.toString();
        }



        if(decimal !== '.' || this.secondInput.includes('.')) {
            return; //exit method early
        } else {
        this.secondInput = this.secondInput.toString() + decimal.toString();
        }
    }

}