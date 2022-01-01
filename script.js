class calc {
  constructor(prev, curr) {
    this.prev = prev
    this.curr = curr
  }
  
  clear() {
    this.curr = ''
    this.prev = ''
    this.oper = undefined
    
  }
  
  del() {
    
  }
  
  appendNum() {
    this.curr = number
    
  }
  
  chooseOper() {
    
  }
  
  computer() {
    
  }
  
  update() {
    this.curr.innerText = this.curr
    
  }
  
  
  
}


const nums = document.querySelectorAll('[data-num]')
const opers = document.querySelectorAll('[data-oper]')
const equal = document.querySelector('[data-equal]')
const del = document.querySelector('[data-del]')
const clear = document.querySelector('[data-clear]')
const prev = document.querySelector('[data-prev]')
const curr = document.querySelector('[data-curr]')



const calculator = new calc(prev, curr)

nums.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNum(button.innerText)
    calculator.update()
  })
})
