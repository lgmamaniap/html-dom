/*
document.querySelector('h3')
console.log(document.querySelector('h3'))
console.log(document.querySelector('.h3-danger'))
console.log(document.querySelector('#paragraph'))
console.log(document.getElementById('paragraph'))

console.log(document.querySelectorAll('.h3-danger'))


const paragraph = document.querySelector('#paragraph')
paragraph.textContent = 'Text modified from JS'
paragraph.innerHTML = '<b>Text with innerHTML</b>'

paragraph.classList.add('h3-danger', 'my-2')

const paragraph2 = document.getElementById('paragraph')
paragraph2.textContent = 'Paragraph modified from JS'
paragraph.innerHTML = '<b>Paragraph modified from JS using innerHTML</b>'

paragraph.classList.add('h3-danger', 'mx-2')
*/


// Create element and innerHTML generates Reflow :()
const list = document.getElementById('list')
console.log(list)

const arrayElements = [
  'First element',
  'Second element',
  'Third element',
]

arrayElements.forEach((textLi, index) => {
  const li = document.createElement('li')
  li.id = `id-li-${index}`
  li.textContent = textLi

  list.appendChild(li)
})

arrayElements.forEach((textLi, index) => {
  list.innerHTML += `<li id="id-li-${index}">${textLi}</li>`
})