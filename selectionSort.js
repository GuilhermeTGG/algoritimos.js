const livros = require('./lista_livros');

const menorValor = require('./menorValor');

  //             O valor a atual passa a ser 1;
for (let atual = 0; atual < livros.length - 1; atual++) {

    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log("posição atual", atual)
    console.log("livro atual", livros[atual])

    let livroMenorPreco = livros[menor];
    console.log("livro mais barato", livros[atual])

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)