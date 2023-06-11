setTimeout(() => {
  const pantalla = document.getElementById('pantalla');
  const btnBorrar = document.getElementById('borrar');
  let expresion;

  // Funcion Borrar Pantalla
  btnBorrar.addEventListener('click',()=>{
    pantalla.value='0';
    expresion = '0';
  })

  pantalla.value =0;

  // Crea la expresion ingresada por usuario y realiza detectarTecla
  detectarTecla =(x)=>{
    if(x !== '+/-' && x !== '%' && x !== '√' && x !== '=' ){
      if (pantalla.value === '0') {
        expresion = x;
      } else {
        expresion += x;
      }
      pantalla.value = expresion;
    }
    else if (x === '+/-' && eval(expresion) > 0) { //Coloca -
      pantalla.value = '-' + expresion;
      expresion=pantalla.value;
    }
    else if (x === '+/-' && eval(expresion) < 0) { //quita -
      pantalla.value = expresion.substring(1);
      expresion=pantalla.value;
    }
    else if(x=== '%'){  //Calcula Porcentajes
      expresion = eval(expresion)/100 || 0;
      pantalla.value = expresion;
    }
    else if(x=== '√'){  //Calcula Raiz Cuadrada
      expresion = Math.sqrt(eval(expresion))||0;  
      pantalla.value = expresion.toLocaleString;
    }
    else if(x=== '='){  //Calcula detectarTecla (+,-,*,/)
      expresion = (eval(expresion))||0;  
      pantalla.value = expresion;
    }
  }
}, 500);