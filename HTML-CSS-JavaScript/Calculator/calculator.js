class calc {
    constructor(lowerOperand, upperOperand) {
        this.lowerOperandText = lowerOperand;
        this.upperOperandText = upperOperand;
        // clearing all the inputs when new object is created
        this.clearDisplay();
    }

    clearDisplay (){
        // clearing all the inputs
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }

    appendNum(number) {
        if(number === '.' && this.currentOperand.includes('.')) return; 
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperator(operator) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }

    calculate() {
        let calculation;
        const former = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(former) || isNaN(current)) return;

        switch(this.operator) {
            case '+':
                calculation = former + current;
                break;
            case '-':
                calculation = former - current;
                break;
            case '÷':
                calculation = former / current;
                break;
            case '*':
                calculation = former * current;
                break;
            case '%':
                calculation = (former * current)/100;
                break;
            default:
                return;
        }

        this.currentOperand = calculation;
        this.operator = undefined;
        this.previousOperand = '';
    }

    clearLastNum() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    updateDisplay() {
        this.lowerOperandText.innerText = this.currentOperand;
        if (this.operator != null) {
            this.upperOperandText.innerText = `${this.previousOperand} ${this.operator}`;
        }
        else {
            this.upperOperandText.innerText = '';
        }
    }
}


const calcBtn = document.querySelectorAll('.calc-button');
const calcOperator = document.querySelectorAll('.calc-operator');
const calcAllClear = document.querySelector('.calc-all-clear');
const calcDelete = document.querySelector('.calc-delete');
const calcEqual = document.querySelector('.calc-equal');
const lowerOperand = document.querySelector('.calc-lower');
const upperOperand = document.querySelector('.calc-upper');

const numberBtn = document.querySelectorAll('.numberBtn');

let calculator = new calc(lowerOperand, upperOperand);

calcAllClear.addEventListener('click', () => {
    calculator.clearDisplay();
    calculator.updateDisplay();
});

calcEqual.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
});

calcBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
    }); 
});


calcOperator.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.chooseOperator(operator.innerText);
        calculator.updateDisplay();
    }); 
});

calcDelete.addEventListener('click', () => {
    calculator.clearLastNum();
    calculator.updateDisplay();
});

