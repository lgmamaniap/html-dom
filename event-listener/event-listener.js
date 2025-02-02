/*
const btnIncrement = document.querySelector('#btn-increment')
const btnDecrement = document.querySelector('#btn-decrement')
const counterSpan = document.querySelector('#counter-span')
let counter = 0

btnIncrement.addEventListener('click', () => {
  console.log('Click on increment')
  counter++
  counterSpan.textContent = counter
})

btnDecrement.addEventListener('click', () => {
  console.log('Click on decrement')
  counter--
  counterSpan.textContent = counter
})
*/


// Event delegation
const container = document.querySelector('#container')
const counterSpan = document.querySelector('#counter-span')
let counter = 0

container.addEventListener('click', (event) => {
  if (event.target.id == 'btn-increment') {
    counter++
    counterSpan.textContent = counter
  }

  if (event.target.id == 'btn-decrement') {
    counter--
    counterSpan.textContent = counter
  }

  event.stopPropagation()
})

document.body.addEventListener('click', (e) => {
  console.log('Click on body')
  e.stopPropagation()
})