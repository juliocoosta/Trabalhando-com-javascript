// Usando o getElementById, dessa forma conseguimos usar qualquer elemento do html com ID.//
const elemento = document.getElementById('Blog-tittle')
console.log(elemento)

// Usando o getElementsByClassName, dessa forma conseguimos usar qualquer elemento do html com class.//

const elemento1 = document.getElementsByClassName('Blog-tittle1')
console.log(elemento1)

// Usando o getElementsByClassName, dessa forma conseguimos usar qualquer tag do html.//

const elemento2 = document.getElementsByTagName('p')
console.log(elemento2)

// Usando o querySelector, dessa forma conseguimos usar qualquer tag do html sendo, mas ele pucha sempre o primeiro que ele encontrar.//

const elemento3 = document.querySelector('p')
console.log(elemento3)

// Usando o querySelectorAll, dessa forma conseguimos usar todas as tags do html.//

const elemento4 = document.querySelectorAll('p')
console.log(elemento4)

/* 
getElementById(elemento)
getElementsByClassName(html_coletion)
getElementsByTagName(html_coletion)
querySelector(elemento)
querySelectorAll(NodeListe)
*/
