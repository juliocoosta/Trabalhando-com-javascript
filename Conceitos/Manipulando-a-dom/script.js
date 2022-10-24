// Usando o getElementById, dessa forma conseguimos usar qualquer elemento do html com ID.//

/* const elemento = document.getElementById('Blog-tittle')
console.log(elemento) */

// Usando o getElementsByClassName, dessa forma conseguimos usar qualquer elemento do html com class.//

/* const elemento1 = document.getElementsByClassName('Blog-tittle1')
console.log(elemento1) */

// Usando o getElementsByClassName, dessa forma conseguimos usar qualquer tag do html.//

/* const elemento2 = document.getElementsByTagName('p')
console.log(elemento2) */

// Usando o querySelector, dessa forma conseguimos usar qualquer tag do html sendo, mas ele pucha sempre o primeiro que ele encontrar.//

/* const elemento3 = document.querySelector('p')
console.log(elemento3)
 */
// Usando o querySelectorAll, dessa forma conseguimos usar todas as tags do html.//

/* const elemento4 = document.querySelectorAll('p')
console.log(elemento4) */

/* 
getElementById(elemento)
getElementsByClassName(html_coletion)
getElementsByTagName(html_coletion)
querySelector(elemento)
querySelectorAll(NodeListe)
*/

//----------------------------------
// Manipulando Conteúdos
// TextContent

/* const elemento = document.querySelector('h1')

elemento.textContent  = 'lula 2022'

console.log(elemento.textContent) */

// innerText

/* const elemento = document.querySelector('h1')

elemento.innerText = 'Fala dev, blz?'

console.log(elemento) */


/* innerHTML */
/* const elemento = document.querySelector('h1')

elemento.innerHTML = 'Fala dev, blz? <h1>testando</h1>' 

console.log(elemento) */  

// value ou valor

/* const elemento = document.querySelector('input')

elemento.value = 'escreva alguma coisa' */

// ---------------------------
// Manipulando stilos

/* const elemento = document.querySelector('body')

elemento.style.backgroundColor = 'green' */

//-----------------------------------------
// Criando e adicionando elementos

//createElement
/* const div = document.createElement('div')
div.innerText = 'Lula 2022' */

// prepend x append  (antes ou depois)
/* const body = document.querySelector('body')

body.prepend(div) */

//-----------------------------------------
// trabalhando com eventos
/* function lula2022() {
    console.log('lula2022')
} */

// Evento com teclado
/* const input = document.querySelector('input')

input.onkeyup = function(){
    console.log('rodei')

} */

// Eventos com o mouse//
/* const h1 = document.querySelector('h1');

h1.addEventListener('click', lula2022)

function lula2022(){
    console.log('lula2022')
} */