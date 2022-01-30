let locker = document.getElementById('locker')
let lockerBtn = document.getElementById('locker_btn')
let buttons = document.querySelectorAll('.button')
let inputScreen = document.getElementById('input_screen')
let submitBtn = document.getElementById('submit_btn')
let match = document.getElementById('match')
let notMatch = document.getElementById('not-match')
let noInput = document.getElementById('noInput')
let left = document.getElementById('left')

let screenValue = ''
let lockerValue = ''
left.innerHTML = 3




locker.addEventListener('keydown', (e) => {
    e.preventDefault()
})
inputScreen.addEventListener('keydown', (e) => {
    e.preventDefault()
})



// locker section 
function randomPin(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
lockerBtn.addEventListener('click', () => {
    let pin = randomPin(1000, 9999);
    locker.value = pin
    lockerValue = pin
})



// button section 

buttons.forEach(item => {
    item.addEventListener('click', () => {
        let number = item.innerHTML

        switch (number) {
            case 'C':
                screenValue = ''
                inputScreen.value = screenValue
                break;
            case "&lt;":
                screenValue = inputScreen.value.substring(0, inputScreen.value.length * 1 - 1);
                inputScreen.value = screenValue;
                break

            default:
                screenValue += number
                inputScreen.value = screenValue
                break;
        }

    })

})

// submit and password check
submitBtn.addEventListener('click', () => {
    screenValueInt = parseInt(screenValue)
    if (lockerValue == '') {
        noInput.classList.remove('d-none')
    }
    else if (lockerValue === screenValueInt) {
        match.classList.remove('d-none')
        notMatch.classList.add('d-none')
        inputScreen.classList.add('text-success')
        inputScreen.classList.remove('text-danger')
        noInput.classList.add('d-none')
        locker.value = ''
        inputScreen.value = ''
        screenValue = ''
    } else {
        notMatch.classList.remove('d-none')
        noInput.classList.add('d-none')
        match.classList.add('d-none')
        inputScreen.classList.add('text-danger')
        inputScreen.classList.remove('text-success')
        left.innerHTML--
    }




    if (parseInt(left.innerHTML) == 0) {
        submitBtn.disabled = true
    }

})


















