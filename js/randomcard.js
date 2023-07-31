import cards from './card.js'

console.log(cards);

const btnIncrement = document.querySelector(".js-increment")
const btnDiscrement = document.querySelector(".js-discrement")
const inputValue = document.querySelector(".js-input-value")
const btnCreate = document.querySelector('.js-create')
const block = document.querySelector('.js-block')
const btnDelete = document.querySelector('.js-delete')

const counter = {
  value: 0,

  decrement() {
    this.value -=1
},
    increment() {
    this.value +=1
  }
}
inputValue.textContent = counter.value
const decrementValue = () => {
  counter.decrement()
  inputValue.textContent = counter.value
}
const incrementValue = () => {
  counter.increment()
  inputValue.textContent = counter.value
}
btnIncrement.addEventListener('click', incrementValue)
btnDiscrement.addEventListener('click', decrementValue)


const makeMarkupCard = ({src, alt, description}) => {
   const markup = `<img src="${src}" alt="${alt}" width="300"><p>${description}</p>`
//    block.insertAdjecentHTML('beforeend', markup)
return markup

    }
const makeCard = () => {
  block.innerHTML = ''
    block.insertAdjacentHTML('beforeend', makeMarkupCard(cards[counter.value]))
}  

//    block.insertAdjacentHTML('beforeend', makeMarkupCard(cards[counter.value]))

btnCreate.addEventListener('click', makeCard)


const daleteMarkup = () => {
  block.innerHTML = ''
}


btnDelete.addEventListener('click', daleteMarkup)
