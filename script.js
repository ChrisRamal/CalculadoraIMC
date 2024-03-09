// Função para calcular o IMC
function calculateIMC() {
    // Obter os valores de peso e altura
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Verificar se os valores são válidos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcular o IMC
    var bmi = weight / (height * height);

    // Exibir o resultado
    var resultElement = document.getElementById('result');
    var messageElement = document.getElementById('message');

    resultElement.innerHTML = 'Seu IMC é: ' + bmi.toFixed(2);

    // Adicionar uma class para colorir o resultado com base no valor do IMC
    if (bmi < 18.5) {
        resultElement.className = 'Abaixodopeso';
        messageElement.innerHTML = 'Você está abaixo do peso.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultElement.className = 'Normal';
        messageElement.innerHTML = 'Parabéns! Seu peso está dentro da faixa normal.';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultElement.className = 'Acimadopeso';
        messageElement.innerHTML = 'Você está acima do peso.';
    } else {
        resultElement.className = 'Obeso';
        messageElement.innerHTML = 'Cuidado! Você está na faixa de obesidade.';
    }
}
