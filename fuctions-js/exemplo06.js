/* Function() construtor

    * expressão new.
    * criar um novo objeto.
    * this keyword.
    
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + ' está andando'
    }
};

const julio = new Person('Júlio');
const roberto = new Person('Roberto');
console.log(julio.walk());
console.log(roberto.walk());