let cotacaoAr = 166.667


function conversao (cotacaoAr , valorBr){
    return cotacaoAr * valorBr;
}

document.getElementById('conversorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
    const valorBr = Number(document.getElementById('valorBr').value); // Obtém o valor do input
    const resultado = conversao(cotacaoAr, valorBr); // Realiza a conversão
    document.getElementById('resultado').textContent = `O valor convertido é de:  ${resultado.toFixed(2)} ARS`; // Mostra o resultado
});