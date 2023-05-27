var operando1 = 0.0;
var ultBoton = '';
var ultOperador = '';
var contadorAciertos = 0;

function numero(num) {
  var pantallaActual = $(".lcd").html();
  if (ultBoton != '') {
    pantallaActual = "0";
  }
  if (pantallaActual == "0" && num != '.') {
    $(".lcd").html(num);
  } else {
    $(".lcd").html(pantallaActual + num);
  }
  ultBoton = '';
}

function operador(op) {
  if (op != "=") {
    operando1 = parseFloat($(".lcd").html());
    ultOperador = ultBoton = op;
  } else {
    var resultado;
    switch (ultOperador) {
      case '+':
        resultado = operando1 + parseFloat($(".lcd").html());
        $(".lcd").html(resultado);
        break;
      case '-':
        resultado = operando1 - parseFloat($(".lcd").html());
        $(".lcd").html(resultado);
        break;
      case 'X':
        resultado = operando1 * parseFloat($(".lcd").html());
        $(".lcd").html(resultado);
        break;
      case '/':
        resultado = operando1 / parseFloat($(".lcd").html());
        $(".lcd").html(resultado);
        break;
    }
    // Aumentar contador de aciertos
    contadorAciertos++;
    // Comprobar condición de terminación
    if (contadorAciertos >= 10) {
      // Restablecer valores
      operando1 = 0.0;
      ultBoton = '';
      ultOperador = '';
      contadorAciertos = 0;
    }
  }
}

function borrarParcial() {
  var pantallaActual = $(".lcd").html();
  if (pantallaActual.length > 1) {
    // Eliminar el último dígito
    pantallaActual = pantallaActual.slice(0, -1);
    $(".lcd").html(pantallaActual);
  } else {
    // Mostrar 0 si solo queda un dígito
    $(".lcd").html("0");
  }
}

function borrarTotal() {
  // Restablecer valores
  operando1 = 0.0;
  ultBoton = '';
  ultOperador = '';
  contadorAciertos = 0;
  $(".lcd").html("0");
}

function raizCuadrada() {
  var resultado = Math.sqrt(parseFloat($(".lcd").html()));
  $(".lcd").html(resultado);
}

function elevarPotenciaN(n) {
  var resultado = Math.pow(parseFloat($(".lcd").html()), n);
  $(".lcd").html(resultado);
}

