// functional elements
let A1 = document.getElementsByClassName('A1')[0];
let A2 = document.getElementsByClassName('A2')[0];
let A3 = document.getElementsByClassName('A3')[0];
let A4 = document.getElementsByClassName('A4')[0];
// plus buttons
let bt1plus = document.getElementById('plus1')
let bt2plus = document.getElementById('plus2')
let bt3plus = document.getElementById('plus3')
let bt4plus = document.getElementById('plus4')
// minus buttons
let bt1minus = document.getElementById('minus1')
let bt2minus = document.getElementById('minus2')
let bt3minus = document.getElementById('minus3')
let bt4minus = document.getElementById('minus4')
// h2 clicks
let Q1 = document.getElementById('Q1')
let Q2 = document.getElementById('Q2')
let Q3 = document.getElementById('Q3')
let Q4 = document.getElementById('Q4')

//STATIC CODES
A1.classList.add('hide')
A2.classList.add('hide')
A3.classList.add('hide')
A4.classList.add('hide')
bt1minus.classList.add('hide')
bt2minus.classList.add('hide')
bt3minus.classList.add('hide')
bt4minus.classList.add('hide')

// Q FUNCTIONS
Q1.addEventListener('click',function (){
    A1.classList.remove('hide')
    bt1plus.classList.add('hide')
    bt1minus.classList.remove('hide')
})
Q2.addEventListener('click',function (){
    A2.classList.remove('hide')
    bt2plus.classList.add('hide')
    bt2minus.classList.remove('hide')
})
Q3.addEventListener('click',function (){
    A3.classList.remove('hide')
    bt3plus.classList.add('hide')
    bt3minus.classList.remove('hide')
})
Q4.addEventListener('click',function (){
    A4.classList.remove('hide')
    bt4plus.classList.add('hide')
    bt4minus.classList.remove('hide')
})

// BTN FUNCTIONS
bt1plus.addEventListener('click',function (){
    A1.classList.remove('hide')
    this.classList.add('hide')
    bt1minus.classList.remove('hide')
})
bt1minus.addEventListener('click',function (){
    A1.classList.add('hide')
    bt1plus.classList.remove('hide')
    this.classList.add('hide')
})

bt2plus.addEventListener('click' , function(){
    A2.classList.remove('hide')
    this.classList.add('hide')
    bt2minus.classList.remove('hide')
})
bt2minus.addEventListener('click' , function (){
    A2.classList.add('hide')
    bt2plus.classList.remove('hide')
    this.classList.add('hide')
})
bt3plus.addEventListener('click' , function(){
    A3.classList.remove('hide')
    this.classList.add('hide')
    bt3minus.classList.remove('hide')
})
bt3minus.addEventListener('click' , function(){
    A3.classList.add('hide')
    bt3plus.classList.remove('hide')
    this.classList.add('hide')
})
bt4plus.addEventListener('click' , function(){
    A4.classList.remove('hide')
    this.classList.add('hide')
    bt4minus.classList.remove('hide')
})
bt4minus.addEventListener('click' , function(){
    A4.classList.add('hide')
    bt4plus.classList.remove('hide')
    this.classList.add('hide')
})

