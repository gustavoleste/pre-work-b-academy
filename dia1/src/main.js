import './style.css'

const app = document.querySelector('[data-js="app"]')
console.log(app.classList)
app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const toggle = document.querySelector('[data-js="toggle"]')
toggle.addEventListener('click', (e) => {
  e.preventDefault()
  app.classList.toggle('hide')
}, false)
