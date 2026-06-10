function calcular() {
  var v1 = document.getElementById('n1').value;
  var v2 = document.getElementById('n2').value;
  var v3 = document.getElementById('n3').value;

  var erro = document.getElementById('erro');
  var resultados = document.getElementById('resultados');

  if (v1 === '' || v2 === '' || v3 === '') {
    erro.style.display = 'block';
    resultados.style.display = 'none';
    return;
  }

  erro.style.display = 'none';

  var n1 = parseFloat(v1);
  var n2 = parseFloat(v2);
  var n3 = parseFloat(v3);

  var soma = n1 + n2 + n3;
  var media = soma / 3;
  var produto = n1 * n2 * n3;
  var maior = Math.max(n1, n2, n3);
  var menor = Math.min(n1, n2, n3);

  var corpo = document.getElementById('tabela-corpo');
  corpo.innerHTML = '';

  var numeros = [n1, n2, n3];
  var labels = ['Número 1', 'Número 2', 'Número 3'];

  for (var i = 0; i < numeros.length; i++) {
    var destaque = '';
    if (numeros[i] === maior && numeros[i] === menor) {
      destaque = 'mínimo e máximo';
    } else if (numeros[i] === maior) {
      destaque = 'máximo';
    } else if (numeros[i] === menor) {
      destaque = 'mínimo';
    }

    var linha = '<tr><td>' + labels[i] + '</td><td>' + numeros[i] + '</td><td>' + destaque + '</td></tr>';
    corpo.innerHTML += linha;
  }

  document.getElementById('res-soma').textContent = soma;
  document.getElementById('res-media').textContent = media.toFixed(2);
  document.getElementById('res-produto').textContent = produto;
  document.getElementById('res-maior').textContent = maior;
  document.getElementById('res-menor').textContent = menor;

  resultados.style.display = 'block';
}
