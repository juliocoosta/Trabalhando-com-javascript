/*  Baseado no array de livros por categoria abaixo, faça os  seguintes desafios: 

    1- Contar o número de categoria e o número de livros em cada categoria:

    2- Contar o número de autores:

    3- Mostrar livros do autor Augusto Cury:

    4- Transformar a função acima em uma funçao que irá receber o nome do autor e devolver os livros desse autor.
*/

const bibliotecadelivros = [
{
    categoria: 'Riqueza',
    livros:[
        {
            Título:'Os segredos da mente milionária',
            Autor:'T. Harv Eker',
        },
        {
            Título:'O homem mais rico da babilonia',
            Autor:'George S. Classon',
        },
        {
            Título:'Pai rico, pai pobre',
            Autor:'Robert T. Kiyosaki e Sharon L. Lechter',
        },


    ],

},
{
    categoria:'Inteligência Emocional',
    livros:[
        {
            Título:"Você é insubstituível",
            Autor:"Augusto Cury",
        },
        {
            Título:"Ansiedade - Como enfrentar o mal do século",
            Autor:"Augusto Cury",
        },
        {
            Título:"Os 07 hábitos das pessoas altamente eficazes",
            Autor:"Stephen R. Covey",
        },


    ],
},  
];

// 1- Contar o número de categoria.
let totaldecategotia = bibliotecadelivros.length
console.log('O total de categotias de livros:', totaldecategotia);

//  e o número de livros em cada categoria:
for(let categoria of bibliotecadelivros ){
    console.log('Total de livros da categoria:', categoria.categoria)
    console.log(categoria.livros.length)
};

// 2- Contar o número de autores:
function contadordeautores(){
    let autores = [];

    for(let categoria of bibliotecadelivros) {
        for(let livros of categoria.livros) {
            if(autores.indexOf(livros.Autor) == -1) {
                autores.push(livros.Autor)
            }
        }
    }
    console.log('O total de autores é:', autores.length)
}

    contadordeautores();

// 3- Mostrar livros do autor Augusto Cury:
function livrosdeaugustocury(){
    let livros = [];

    for(let categoria of bibliotecadelivros) {
        for(let livro of categoria.livros) {
            if(livro.Autor === 'Augusto Cury') {
                livros.push(livro.Título)
            }
        }
    }
    console.log('O total de livros do autor Augusto Cury:', livros.length)
}

    livrosdeaugustocury();

    // 4- Transformar a função acima em uma funçao que irá receber o nome do autor e devolver os livros desse autor.
    function livrosdequalquerautor(autor){
        let livros = [];
    
        for(let categoria of bibliotecadelivros) {
            for(let livro of categoria.livros) {
                if(livro.Autor === autor) {
                    livros.push(livro.Título)
                }
            }
        }
        console.log(`Os livros do Autor, ${autor}: ${livros.join(', ')}`)
    }
    livrosdequalquerautor('Augusto Cury');

