/*  Baseado no array de livros por categoria abaixo, faça os  seguintes desafios: 

    1- Contar o número de categoria e o número de livros em cada categoria:

    2- Contar o número de autores:

    3- Mostrar livros do autor Augusto Cury:

    4- Transformar a função acima em uma funçao que irá receber o nome do autor e devolver os livros desse autor.
*/

const categoriadelivros = [
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

// 1- Contar o número de categoria e o número de livros em cada categoria:
let totaldecategotia = categoriadelivros.length
console.log(totaldecategotia);





