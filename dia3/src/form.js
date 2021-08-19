const input = document.querySelector('[data-js="input"]')

// criar array de palavras
// colocar em letras maiusculas
// transformar em string
// alterar input

input.addEventListener('input', () => {
  const valuesList = input.value.split(' ')
  const valuesListUp = valuesList.map( el => {
    const [first, ...rest] = el
    return ['d','de','da','do','dos', ' ', '', 'D'].includes(el) ? el.toLowerCase() : first.toUpperCase() + rest.join('').toLowerCase()
  })
  input.value = valuesListUp.join(' ')
})
