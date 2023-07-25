
class Calculator {

    constructor(firstOperand, secondOperand){
        this.firstOperand = firstOperand;
        this.secondOperand = secondOperand;
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

        console.log("addDecimal method called with:", decimal);
        if (decimal === '.' && this.secondInput.includes('.')) {
            console.log("Decimal already present, exiting early.");
            return; // exit method early if the second input already contains a decimal
        }
    
        this.secondInput = this.secondInput.toString() + decimal.toString();
        console.log("New secondInput:", this.secondInput);
    }


    chooseOperator(operator){
        this.operator = operator;
        this.firstInput = this.secondInput;
        this.secondInput = ''

        if(this.secondInput === ''){
            return;
        }
        if(this.firstInput !== ''){
            this.compute();
        }
    }

    compute() {
        let answer 
        let a = parseFloat(this.firstInput);
        let b = parseFloat(this.secondInput);
        if(isNaN(a) || isNaN(b)){
            return;
        }
        switch(this.operator){
            case '+':
                answer = a + b;
                break;
            case '-':
                answer = a - b;
                break;
            case '×':
                answer = a * b;
                break;
            case '÷':
                if (b === '0'){
                    alert('Division by 0 is not possible.');
                    this.clear();
                } else {
                answer = a/b;
                }
                break;
            case '%':
                answer = a % b;
                break;
            default:
                return;
        }
        this.secondInput = answer;
        this.operator = undefined;
        this.firstInput = '';

    }

    //add display features functions
    DisplayNumber(number){
        const stringNum = number.toString()
        const integer = parseFloat(stringNum.split('.')[0])
        const decimal = stringNum.split('.')[1]
        let intdisplay 
        if(isNaN(integer)){
            intdisplay = ''
        } else {
            intdisplay = integer.toLocaleString('en', {maximumFractionDigits: 0}) // used to add thousand separators with no fractional digits
        }
        if(decimal != null) {
            return `${intdisplay}.${decimal}`
        } else {
            return intdisplay;
        }
    }

    updateDisplay(){
        this.secondOperand.innerText = this.DisplayNumber(this.secondInput)
        if(this.operator != null) {
            this.firstOperand.innerText = `${this.DisplayNumber(this.firstInput)} ${this.operator}`
        } else {
            this.firstOperand.innerText = ''
        }
    }

    addNum(number){
        if(number === '.' && this.secondInput.includes('.')) {
            return
        } else {
            this.secondInput = this.secondInput.toString() + number.toString()
        }
    }



}

document.addEventListener('DOMContentLoaded', () => {
console.log('DOMContentLoaded event triggered');
let numberBtn = document.querySelectorAll('.number')
let operatorBtn = document.querySelectorAll('.operator')
let clearBtn = document.getElementById('clear')
let DelBtn = document.getElementById('delete')
let equalBtn = document.getElementById('evaluate')
let pointBtn = document.getElementById('decimal')
let firstOperand = document.getElementById('firstOperand')
let secondOperand = document.getElementById('secondOperand')
let answer
console.log('firstOperand:', firstOperand);
console.log('secondOperand:', secondOperand);

//create class + add listeners for buttons
const calculator = new Calculator(firstOperand, secondOperand);


numberBtn.forEach( button =>{
    button.addEventListener('click', () =>{
        calculator.addNum(button.innerText)
        calculator.updateDisplay()
    })
})

operatorBtn.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

equalBtn.addEventListener('click', button =>{
        calculator.compute()
        calculator.updateDisplay()
})

clearBtn.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

DelBtn.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})

pointBtn.addEventListener('click', button =>{
    calculator.addDecimal('.')
    calculator.updateDisplay()
})
})
// add keyboard features