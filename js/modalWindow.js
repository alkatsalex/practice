const backDrop = document.querySelector('.backdrop')
const btnOpen = document.querySelector('.js-open')

btnOpen.addEventListener('click', toOpen)
backDrop.addEventListener('click', tocloseBackDrop)


function toOpen () {
    backDrop.classList.remove('is-hidden')
}

function tocloseBackDrop (event) {

    if (event.target === backDrop) {
        backDrop.classList.add('is-hidden')
    }
    
}