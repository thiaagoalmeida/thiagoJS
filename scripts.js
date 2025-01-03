let cotacaoAr = 166.667;

function conversao(cotacaoAr, valorBr) {
    return cotacaoAr * valorBr;
}

document.getElementById('conversorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    
    // Obtém o valor do input e substitui vírgulas por pontos
    const valorBr = Number(document.getElementById('valorBr').value.replace(',', '.')); 

    // Verifica se o valor é válido
    if (isNaN(valorBr)) {
        document.getElementById('resultado').textContent = "Por favor, insira um número válido.";
        return;
    }

    const resultado = conversao(cotacaoAr, valorBr); // Realiza a conversão
    document.getElementById('resultado').textContent = `O valor convertido é de: ${resultado.toFixed(2)} ARS`; // Mostra o resultado
});
