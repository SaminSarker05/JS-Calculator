class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    
    if (this.operation === '+') {
      computation = prev + current
    } else if (this.operation === '-') {
      computation = prev - current
    } else if (this.operation === '*') {
      computation = prev * current
    } else if (this.operation === '÷') {
      computation = prev / current
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}
const nums = document.querySelectorAll('#num');
const opers = document.querySelectorAll('#oper');
const equal = document.querySelector('#equal');
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');
const prev = document.querySelector('#prev');
const current = document.querySelector('#current');

const calculator = new Calculator(prev, current)

for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener('click', () => {
    calculator.appendNumber(nums[i].innerText)
    calculator.updateDisplay()
  })
}

for (let i = 0; i < opers.length; i++) {
  opers[i].addEventListener('click', () => {
    calculator.chooseOperation(opers[i].innerText)
    calculator.updateDisplay()
  })
}

equal.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

clear.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

del.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})