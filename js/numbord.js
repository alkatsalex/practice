const numBord = document.querySelector('.numBord');
const display = document.querySelector('.numBord-display')


numBord.addEventListener('click', onClickBtn)

function onClickBtn(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }

       
console.log('click')
    display.textContent += e.target.textContent

    if (e.target.textContent === "<=") {
        display.textContent = ""
    }
}

