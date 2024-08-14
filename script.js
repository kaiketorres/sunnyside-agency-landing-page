const cotainerBar = document.querySelector('.cotainerBar')
const divPai = document.createElement('div')
divPai.setAttribute('class', 'divPai' )

const divFilho = document.createElement('div')
divFilho.setAttribute('class', 'divFilho' )

const textos = [
  'About',
  'Services',
  'Project',
  'Contanct'
];

const links = [
  '#main',
  '#HeroGraphic',
  '#cliente',
  '#footer'
];

for(let i in textos){
  const a = document.createElement('a' )
  a.textContent = textos[i]
  a.setAttribute('href', links[i] )
  divFilho.appendChild(a)
  }

divPai.appendChild(divFilho)

cotainerBar.appendChild(divPai)


const MostrarNav = () =>{

  const computedStyle = window.getComputedStyle(divPai)

  if(computedStyle.display === 'none'){
    divPai.style.display = 'flex'
  } else {
    divPai.style.display = 'none'
  }
  
}

