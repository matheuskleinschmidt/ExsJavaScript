const fs = require('fs');


function exibirConteudoDoArquivo(erro, dados) {
    if (erro) {
        console.log("Erro ao ler o arquivo:", erro);
        return;
    }
    console.log("Conteúdo do arquivo:", dados.toString());
}


fs.readFile('bah.txt', exibirConteudoDoArquivo);

console.log("Essa linha será executada antes da leitura do arquivo, por causa da natureza assíncrona.");
