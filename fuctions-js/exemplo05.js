// callback function

function sayMyName(name){
    console.log('Antes de executar a função callback.');
    
    console.log('Depois de executar a callback');
    
    name()

};

sayMyName(
    function name(){
        console.log('Isso não é ideia não boy')
    }
);