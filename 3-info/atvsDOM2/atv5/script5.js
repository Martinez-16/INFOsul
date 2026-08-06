  function intercalar() {
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;
    var resultado = "";

    for (let i = 0; i < palavra1.length || i < palavra2.length; i++) {
      if (i < palavra1.length) {
        resultado = resultado + palavra1[i];
      }
      if (i < palavra2.length) {
        resultado = resultado + palavra2[i];
      }
    }

    document.getElementById("resultado").value = resultado;
  }