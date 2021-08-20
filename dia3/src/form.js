// exercicio 01
const input = document.querySelector('[data-js="input"]')
input.addEventListener('input', e => {
  const strToArray = e.target.value.split(' ')
  console.log('step-01:', strToArray)
  e.target.value = strToArray.map(word => {
    return exceptions(word.toLowerCase())
    ? word.toLowerCase()
    : capitalize(word)
  }).join(' ')
})
const capitalize = word => `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`
const exceptions = word => ['da', 'das', 'de', 'do', 'dos'].includes(word.toLowerCase())

// exercicio 02
const $ = selector => document.querySelector(`[data-js="${selector}"]`)
const form = $('formulario')
const select = document.createElement('select')
select.setAttribute('multiple', '')
const colorsContainer = document.createElement('div')
colorsContainer.style.display = 'flex'

const colors = ['#6B7280','#EF4444','#F59E0B','#10B981','#3B82F6','#6366F1', '#885CF6', '#EC4899']
colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(option)
})

select.addEventListener('input', e => {
  colorsContainer.innerHTML = ''
  Array.from(e.target.selectedOptions).forEach(option => {
    const div = createDiv(option.value)
    colorsContainer.appendChild(div)
  })
})

const createDiv = value => {
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  return div
}

form.appendChild(select)
document.body.appendChild(colorsContainer)
console.log(select)
