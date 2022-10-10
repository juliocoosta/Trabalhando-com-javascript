// Criar uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

// formulas:
// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheiExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheiExists) {
      throw new Error('oxe, nada aver');
    }

}

try {
    
    transformDegree('50Z')
    
} catch (error) {
    console.log(error)
}


