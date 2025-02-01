/*
document.querySelector('h3')
console.log(document.querySelector('h3'))
console.log(document.querySelector('.h3-danger'))
console.log(document.querySelector('#paragraph'))
console.log(document.getElementById('paragraph'))

console.log(document.querySelectorAll('.h3-danger'))
*/

const paragraph = document.querySelector('#paragraph')
paragraph.textContent = 'Text modified from JS'
paragraph.innerHTML = '<b>Text with innerHTML</b>'

paragraph.classList.add('h3-danger', 'my-2')

const paragraph2 = document.getElementById('paragraph')
paragraph2.textContent = 'Paragraph modified from JS'
paragraph.innerHTML = '<b>Paragraph modified from JS using innerHTML</b>'

paragraph.classList.add('h3-danger', 'mx-2')