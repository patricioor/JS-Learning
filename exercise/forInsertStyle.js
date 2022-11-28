const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps ) {
  p.setAttribute('style','background-color:' + backgroundColorBody);
  p.style.color = 'white'
}