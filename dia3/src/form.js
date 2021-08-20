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
