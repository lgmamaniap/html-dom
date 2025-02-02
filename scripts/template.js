const list = document.getElementById('list')

const arrayElements = [
  'First element',
  'Second element',
  'Third element',
]

/*
// Using fragment
const fragment = document.createDocumentFragment()
arrayElements.forEach((text, index) => {
  const li = document.createElement('li')
  li.id = `id-li-${index}`
  li.classList.add('list')

  const b = document.createElement('b')
  b.textContent = 'Name: '
  
  const span = document.createElement('span')
  span.classList.add('text-danger')
  span.textContent = text

  li.appendChild(b)
  li.appendChild(span)
  fragment.appendChild(li)
})
list.appendChild(fragment)

// Using innerHTML
let template = ''
arrayElements.forEach((text, index) => {
  template += `
    <li id="id-in-${index}" class="list">
      <b>Name: </b> <span class="text-danger">${text + ' inner'}</span>
    </li>
  `
})
list.innerHTML = template
*/

const template = document.querySelector('#template-li').content
const fragment = document.createDocumentFragment()

arrayElements.forEach((text) => {
  template.querySelector('.list span').textContent = text

  const clone = template.cloneNode(true)
  fragment.appendChild(clone)
})
list.appendChild(fragment)