// Criar uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

// formulas:
// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function transfomarçãodegraus(graus) {
    const celsiusExists = graus.toUpperCase().includes('C')
    const fahrenheiExists = graus.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheiExists) {
        throw new Error('Grau não identificado');
    }
    // fluxo para F -> C
    let fahrenheit = Number(graus.toUpperCase().replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let grauC = 'C°'

    if(celsiusExists){
         fahrenheit = Number(graus.toUpperCase().replace('C', ''));
         formula = celsius => celsius * 9/5 + 32
         grauC = 'F°'

        
    }


    return formula(fahrenheit) + grauC
    
    
}

try {
    console.log(transfomarçãodegraus('80F'));
    console.log(transfomarçãodegraus('10C'))
    transfomarçãodegraus('50Z')
    
} catch (error) {
    console.log(error.message)

}