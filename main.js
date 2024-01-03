import './style.css'

const navbtn = document.querySelector('#menu')
const menubar = document.querySelector('[role = "menubar"]')

navbtn.addEventListener('click', () => {
  menubar.classList.toggle('hidden')
  menubar.classList.toggle('flex')
})
