// Transformar un número quabrado com 02 decimais e trocar ponto por virgula.

let number = 547.365467
console.log(number.toFixed(2).replace('.',','));

// Transformando letras minúsculas e maiúsculas. 
let word = "Programar é incrível"
console.log(word.toLocaleUpperCase());

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _.
let phrase = 'Não adianta ser programador senão for calvo'
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore);

// Verificar se o texto que uma palavra Amor.
let phrase1 = 'Eu quero ser feliz também.'
console.log(phrase1.includes('amor'));
