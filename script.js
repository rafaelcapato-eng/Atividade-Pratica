let tamanho = 18;

// Aumentar o tamanho do texto
document.querySelector("#aumentar").onclick = function () {
    tamanho += 2;
    document.body.style.fontSize = tamanho + "px";
};

// Diminuir o tamanho do texto
document.querySelector("#diminuir").onclick = function () {
    if (tamanho > 12) { // Limite mínimo para manter legível
        tamanho -= 2;
        document.body.style.fontSize = tamanho + "px";
    }
};