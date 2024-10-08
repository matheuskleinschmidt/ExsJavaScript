//entendendo um pouco de callback

function saudacao(nome, callback, callback2) {

    console.log("Olá, " + nome);
    callback(callback2);
}

function mensagemFinal(callback) {
    callback("callback da callback");
}

function mensagemFinal2(bah) {
    console.log(`Esta é a mensagem final. ${bah}`);
}

saudacao("Matheus", mensagemFinal, mensagemFinal2);


