const livros = require('./lista_livros');

function menorValor(arrProtudos, posicaoInicial) {
   
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProtudos.length; atual++) {
        if (arrProtudos[atual].preco < arrProtudos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato;
}

module.exports = menorValor;
