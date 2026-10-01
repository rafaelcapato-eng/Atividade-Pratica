// Variável para controlar o tamanho dinâmico da fonte
let tamanho = 18;

// Evento do botão para aumentar o tamanho do texto
document.querySelector("#aumentar").onclick = function () {
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
};

// Evento do botão para diminuir o tamanho do texto
document.querySelector("#diminuir").onclick = function () {
    if (tamanho > 12) { // Limite mínimo de segurança para legibilidade
        tamanho -= 2;
        document.body.style.fontSize = tamanho + "px";
    }
};