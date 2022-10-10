// function hoisting

// sayMyName();

/* function sayMyName(){
    console.log('Júlio');
//};
 */
// uma function cirado dessa forma irá sofrer o hoisting.
//-----------------------------------
//----------------------------------
/* var sayMyName = function(){
    console.log('Júlio');
};
let sayMyName = function(){
    console.log('Júlio');
};
const sayMyName = function(){
    console.log('Júlio');
}; */

// já nesses três casos o hoisting não irá acontecer, pois quando fazemos uma função de uma maneira de expressão a mesma não sofre elevação.

// arrow function

    /* const sayMyName =() => {
        console.log('Julio')
    };

    sayMyName() */
    
    // arrow (=>) é apenas uma forma prática de escrever uma function.

    // utilizando a palavra function ficaria assim: 
    /* const sayMyName = function() {
        console.log('ulio')
    };

    sayMyName() */