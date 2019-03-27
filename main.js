var display = document.querySelector('.display')
var num_buttons = document.querySelectorAll('.num_buttons')
var math_buttons = document.querySelectorAll('.math_buttons')
var expression = document.querySelector('.display')
var clear = document.querySelector('.clear_button')
var equal = document.querySelector('.equal_button')

clear.addEventListener('click', function() {
    display.innerText = ""
})

function getDisplay() {
    for (let button of num_buttons) {
        button.addEventListener('click', function() {
            display.innerText += (button.value)
        })
    }
    for (let button of math_buttons) {
        button.addEventListener('click', function() {
            display.innerText += (button.value)
        })
    }
}

function getAnswer() {
    equal.addEventListener('click', function() {
        try {
            math.eval(display.innerText)
        } catch(e) {
            if (e instanceof SyntaxError) {
                alert("You just entered hot nonsense, try again...")
            }
        }
        let answer = math.eval(display.innerText)
        display.innerText = ""
        display.innerText += (answer)
    })
}

getDisplay()
getAnswer()