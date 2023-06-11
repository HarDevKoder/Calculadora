setTimeout(() => {
  // Funcion que Borra la Pantalla
  borrarPantalla = () => {
    pantalla.value = "0";
    expresion1 = "";
    expresion2 = "";
    expresionTotal = "";
  };

  // Declaracion de variables
  let expresion1 = 0;
  let expresion2 = 0;
  let expresionTotal = 0;
  let contador = 1;
  let operacion;
  let resultado = 0;

  // Funcion que detecta teclas presionadas y realiza operaciones
  detectarTecla = (tecla) => {
    if (
      tecla !== "+" &&
      tecla !== "-" &&
      tecla !== "*" &&
      tecla !== "/" &&
      tecla !== "="
    ) {
      //teclas de valores
      if (contador === 1) {
        pantalla.value === "0"
          ? (expresion1 = ''+tecla)
          : (expresion1 += tecla);
        pantalla.value = expresion1;
      } else {
        pantalla.value === "0"
        ? (expresion2 = ''+tecla)
        : (expresion2 += tecla);
        pantalla.value = expresion2;
      }
    } else {
      //Teclas de Operaciones
      if(tecla!=='='){
        operacion = tecla;
        contador++;
      }else{
        expresionTotal=expresion1+operacion+expresion2;
        resultado = eval(expresionTotal);
        pantalla.value=resultado;
        contador=1;
      }

    }
  };
}, 500);

// if(x !== '+/-' && x !== '%' && x !== '√' && x !== '=' ){
//   if (pantalla.value === '0') {
//     expresion = x;
//   } else {
//     expresion += x;
//   }
//   pantalla.value = expresion;
// }
// else if (x === '+/-' && eval(expresion) > 0) { //Coloca -
//   pantalla.value = '-' + expresion;
//   expresion=pantalla.value;
// }
// else if (x === '+/-' && eval(expresion) < 0) { //quita -
//   pantalla.value = expresion.substring(1);
//   expresion=pantalla.value;
// }
// else if(x=== '%'){  //Calcula Porcentajes
//   expresion = eval(expresion)/100 || 0;
//   pantalla.value = expresion;
// }
// else if(x=== '√'){  //Calcula Raiz Cuadrada
//   expresion = Math.sqrt(eval(expresion))||0;
//   pantalla.value = expresion.toLocaleString;
// }
// else if(x=== '='){  //Calcula detectarTecla (+,-,*,/)
//   expresion = (eval(expresion))||0;
//   pantalla.value = expresion;
// }
