//Switchs (Turn-On/Off) and declaring some needed variables

var sc = document.getElementById('sc')
var scScreen = document.getElementById('sc_screen')
var mnScreen = document.getElementById('mnScreen')
var mn = document.getElementById('mn')
var scScreenTxt = document.getElementById('scScreenTxt')
var scAnswer = document.getElementById('scAnswer')
function scOn(){
    sc.style.height = '490px'
    scScreen.style.display = 'grid'
    mn.style.height = '36px'
    scScreenTxt.innerHTML = ''
    scAnswer.innerHTML = ''
}

function mnOn(){
    mn.style.height = '340px'
    sc.style.height = '50px'
    scScreen.style.display = 'none'
    mnScreen.innerHTML = ''
}

function off(){
    sc.style.height = '50px'
    scScreen.style.display = 'none'
    mn.style.height = '36px'
}

//Manual Calculator
function mnCalc(value){
    mnScreen.innerHTML += value
    if(mnScreen.innerHTML.length > 12){
        mnScreen.innerHTML = 'UnknownError'
    }
}
function mnAns(){
    mnScreen.innerHTML = eval(mnScreen.innerHTML)
}
function mnPercent(){
    mnScreen.innerHTML = mnScreen.innerHTML /100
}
function mnClear(){
    mnScreen.innerHTML = ''
}

//Scientific Calculator
function scClear(){
    scScreenTxt.innerHTML = ''
    scAnswer.innerHTML = ''
}
function del(){
    scScreenTxt.innerHTML = ''
}

function ScCalc(value){
    scScreenTxt.innerHTML += value
    if(scScreenTxt.innerHTML.length > 25){
        scScreenTxt.innerHTML = 'Limit Exceeded; Press Delete'
    }
}

function SQroot(){
    scAnswer.innerHTML = Math.sqrt(Number(scScreenTxt.innerHTML))
    scScreenTxt.innerHTML = '&radic;' + scScreenTxt.innerHTML
}
function SQ(){
    scAnswer.innerHTML = Math.pow(Number(scScreenTxt.innerHTML) , 2)
    scScreenTxt.innerHTML = scScreenTxt.innerHTML + '^2'
}
function LOG(){
    scAnswer.innerHTML = Math.log10(Number(scScreenTxt.innerHTML))
    scScreenTxt.innerHTML = 'log' + scScreenTxt.innerHTML
}
function IN(){
    scAnswer.innerHTML = Math.log(Number(scScreenTxt.innerHTML))
    scScreenTxt.innerHTML = 'ln' + scScreenTxt.innerHTML
}
function PIE(){
    scAnswer.innerHTML = Number(scScreenTxt.innerHTML) * Math.PI
    scScreenTxt.innerHTML = scScreenTxt.innerHTML + '&pi;'
}
function sine() {
    scAnswer.innerHTML = Math.sin(Number(scScreenTxt.innerHTML) * Math.PI/180)
    scScreenTxt.innerHTML = 'sin' + scScreenTxt.innerHTML
}
function cosine(){
    scAnswer.innerHTML = Math.cos(Number(scScreenTxt.innerHTML) * Math.PI/180)
    scScreenTxt.innerHTML = 'cos' + scScreenTxt.innerHTML
}
function tangent(){
    scAnswer.innerHTML = Math.tan(Number(scScreenTxt.innerHTML) * Math.PI/180)
    scScreenTxt.innerHTML = 'tan' + scScreenTxt.innerHTML
}
function powerMinusOne(){
    scAnswer.innerHTML = Math.pow(Number(scScreenTxt.innerHTML) , -1)
    scScreenTxt.innerHTML = scScreenTxt.innerHTML + '^-1'
}
function tenPower(){
    scAnswer.innerHTML = Math.pow(10 , Number(scScreenTxt.innerHTML))
    scScreenTxt.innerHTML = '10^' + scScreenTxt.innerHTML
}
function percent(){
    scAnswer.innerHTML = scScreenTxt.innerHTML /100
    scScreenTxt.innerHTML = scScreenTxt.innerHTML + '%'
}

function scAns(){
    scAnswer.innerHTML = eval(scScreenTxt.innerHTML)
    if(scAnswer.innerHTML.length > 20){
        scAnswer.innerHTML = 'SyntaxError!'
    }
}
console.log(
    // Math.sin(30 * Math.PI/180)
    // Math.cos(30 * Math.PI/180)
    Math.tan(30 * Math.PI/180)
//     Math.PI
//     eval(Math.PI)
)


