    //* TRABALHANDO COM VARIÁVEIS E TIPOS DE VARIÁVEIS*

    // variáveis e tipos de dados.
    // daclaração or declaration.
    //(var name;) retirar os parenteses.

    // assignment or atributos de valores.
    //(name = "Júlio") retirar os parenteses.
    // que tipo mde dado foi inserido na variável.
    //console.log(typeof name)

    // agrupamentos de declarações.
    //(let idade, isHuman;) retirar os parenteses.

    //(idade = 18) retirar os parenteses.
    //(isHuman = true) retirar os parenteses.

    //multiplos argumentos na função.
    //console.log(name, idade, isHuman);

    // escrita do texto com variáveis.
    // concatenando os valores.
    //console.log(' O ' + name + ' tem ' + idade + ' anos. ')

    // interpolano valores com template literals or template strings.
    //(console.log(` O ${name} tem ${idade} anos de idade. `)) retirar os parenteses.

    //---------------------------------------------------------------------------------------------

    // TRABALANDO COM OBJECT

    // Criando um objeto.
    //const person = {
    //name: 'Júlio', // obs: sempre colocar (,) no final da atribuição.
    //age: 28,
    //weight: 82,
    //isAdmin: true,

    //}

    //console.log(`${person.name} tem ${person.age} e pesa atualmente ${person.weight}kg ${person.isAdmin}`)

    //-----------------------------------------------------------------------------------------------       

    // TRABALAHNANDO COM ARRAY.

    // Criando um array.
    //const animais = [
        //'leão',
        //'Macaco',
        //'gato',
    //]
    // Acessar valores dentro do array.
    //console.log(animais[0]);

    //---------------------------------------------------

    // Manipulando o Arrays

    //let techs = ["html", "css", "js"]

    // *adicinar um intem no fim.

    //console.log(techs.push("nodejs"))
    //console.log(techs)

    // *adicionar no começo

    //techs.unshift('sql')
    //console.log(techs)

    // remover item do fim.
    //techs.pop()
    //console.log(techs)

    // remover do começo.
    //techs.shift()
    //console.log(techs)

    // pegar somente alguns elementos do array.
    //console.log(techs.slice(1, 3))
    //console.log(techs)

    // remover 01 ou mais itens em qualquer posição do array.
    //techs.splice(1, 2)

    // encontar a posição de um elemento no array.
    //let index = techs.indexOf('css')
    //console.log(index)

    //----------------------------------------------

    // Operadores Aritiméticos

    // multiplicação:
    //console.log(5*5);

    // divisão:
    //console.log(10/2);

    // soma 
    //console;log(10+5);

    // subtração:
    //console.log(10-5);

    // resto da divisão:
    //let remaider;
    //remaider = 10 % 5;
    //console.log(remaider);

    // incremento:
    //let increment = 0;
    //increment++;
    //console.log(increment);

    // decremento:
    //let decrement = 0;
    //decrement--;
    //console.log(decrement);

    // exponencial:
    //console.log(5**5);
//-----------------------------------------------------
  
    // Operadores de Comparação.
    // irá comparar valores e retornar um boolean como resposta à comparação:

    //let one = 1;
    //let two = 2;

    // == igual a.
    //console.log( two == 1);
    //console.log( one == '1');

    // != diferente de.
    //console.log(one != two);
    //console.log(one != 1);
    //console.log(one != '1');

    // === estritamente igua a 
    //let one = 01;
    //let two = 02;

    //console.log( one === '1');
    //console.log( one === 1 );

    // !== estritamente diferente de
    //console.log( two !== '2');
    //console.log( two !== 2 );

    // >      maior que 
    //let one = 1, two = 2;
    //console.log(one > two);

    // >=   maior igual a 
    //console.log( one >= 1);
    //console.log( two >= 1);

    // <     menor que
    //console.log(one < two);

    // <=    menr igaul a 
    //console.log( one <= two );
    //console.log( one <= 1 );
    //console.log( one <= 0 );

    // Operadores de atribuição (assignment)
    //let x 

    // assignment
    //x = 01;

    // addition assignment 
    //x += 2;  // é a mesma coisa que x = x + 2;
    
    // subtraction assinment
    //x -= 1; // é a mesma coisa que x = x - 1;

    // multiplication assinment 
    //x *= 2; // é a mesma coisa que x = x * 2;

    // division assinment
    //x /= 2; // é a mesma coisa que x = x / 2;

    // remainder, exponetiation
    //x **= 2 // é a mesma coisa que x = x %= 2;

    //---------------------------------------

    // Operadores lógicos (logical operators)

    // - 2 valores booleanos, quando verificados, resultará no valor em verdadeiro ou falso.

    //let pao = true;
    //let queijo = false;

    // AND "&&"
    //console.log(pao && queijo);
    // só vai ser verdadeiro se as duas forem verdadeiras.

    // OR "||"
    //console.log(pao || queijo);
    // basta uma ser verdadeira.

    // NOT "!"
    //console.log(pao || queijo);
    // ele nega uma decraração.

    //--------------------------------------

    // Operador Condicional (ternário)

    // Deoendendo da condição, nós recebemos valores diferentes.

    // Condição então valor 1 se não valor 2
    // condition ? value1 : value2

    // Exemplos 
    // Café da manhã top
    //let pao = true;
    //let queijo = false;

    //const cafedamanha = pao || queijo ? 'Café show' : 'Café ruim'

    //console.log(cafedamanha);

    // Maior idade.

    //let age = 17;
    //const podedirigir = age >= 18 ? "Pode dirigir" : "Não tem idade mínima para dirigir";
    //console.log(podedirigir);

    //-----------------------------------------------------

    // if e else.

    //let temperatura = 36;

    //if(temperatura >= 38){
        //console.log('Febre alta')
    //}else if(temperatura >=37){
        //console.log('Febre Moderada')
    //}else{
        //console.log('Saudável.')
    //};

    //--------------------------------------

    // Estrutura de repetição "PARA" no ingles "FOR".
    
    // For
    //for (let i = 0; i <= 10; i++ ){
        //console.log(i)
    //}

     // For com Break.
     // Nesse caso quando o "i" for menor que 50 ele vai parar.
     //for(let i = 100; i > 0; i--){
        //if(i < 50){
            //break;
        //}
        //console.log(i);
     //}

     // While em Português "enquanto"

     //var i = 0;
     //while(i<=10){
        //console.log(i)
        //i = i + 1; // mesma coisa que i++
     //};
     





     


 



    
    
        
