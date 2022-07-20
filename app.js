import cipher from './cipher.js';
window.addEventListener('load', inicio, true); //es una función para asociar un evento a un input en HTML, puedo colocar esta función.
//function inicio, es para asignar a cada uno de los eventos que se van a producir, el escuchador correspondiente.
//LLamar a las funciones.
function inicio() {
  /*Por el ID(identificador) usará 'mensaje', después de punto le agrego la función addEventListener, el escuchador.
    Es una función que se ejecutará una vez que se cumplan las condiciones del evento 'keyup' (soltar la tecla) */
  document.getElementById('mensaje').addEventListener(
    'keyup',
    function () {
      this.value = this.value.toUpperCase(); //para mayúsculas.
    },
    true //bubbling phase
  );
  //click en el botón cifrar, llamará a una función.
  document.getElementById('cifrar').addEventListener(
    'click',
    function () {
      let texto = document.getElementById('mensaje').value; //para sacar el valor del texto de mensaje.
      let desplazamiento = document.getElementById('desplazamiento').value; //para sacar el valor de desplazamiento.
      document.getElementById('mensaje2').value = cipher.encode(
        texto,
        desplazamiento
      ); //para escribir mensaje en el input encode
    },
    true
  );
  //igual que la función encode.
  document.getElementById('decifrar').addEventListener(
    'click',
    function () {
      let texto = document.getElementById('mensaje').value;
      let desplazamiento = document.getElementById('desplazamiento').value;
      document.getElementById('mensaje2').value = cipher.decode(
        texto,
        desplazamiento
      ); //para escribir mensaje en el input decode
    },
    true
  );
}
//función encode
/*function encode(texto, desplazamiento) {
  let resultado = ''; //funcion que devuelve el resultado mensaje2 al input mensaje cifrado/desifrado.
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //cadena con el abecedario
  //operación módulo
  desplazamiento = ((desplazamiento % 26) + 26) % 26;
  //para recorrer la cadena e ir rotando cada letra
  if (texto) {
    //for es un ciclo
    for (let i = 0; i < texto.length; i++) {
      //si encuentra un caracter o un espacio, lo devolverá tal cual
      if (letras.indexOf(texto[i]) != -1) {
        //para guardar la posicion de una letra dentro de la cadena
        let posicion = (letras.indexOf(texto[i]) + desplazamiento) % 26;
        //aquí se guardará cada letra nueva rotada, correspodiente a cada una de las posiciones.
        resultado += letras[posicion];
        //retornará caracteres y numeros en caso de haberlos
      } else resultado += texto[i];
    }
  }
  return resultado;
}

console.log(cipher);*/

//funcion encode
/*function encode(texto, desplazamiento) {
  if (!texto) return ''; //función vacía
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  desplazamiento = ((desplazamiento % 26) + 26) % 26;
  //replace le pasamos la cadena y le indicamos que queremos hacer con cada letra
  return texto.replace(
    /[A-Z]/gi,
    /*c=> recorerá la cadena 1 a 1 las letas de la cadena A-Z dentro de texto
    para cada una de las letras comprobar su posición y se le añade el desplazamiento*/
/*(c) => letras[(letras.indexOf(c) + desplazamiento) % 26]
  );
}*/
//funcion decode
/*function decode(texto, desplazamiento) {
  if (!texto) return '';
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  desplazamiento = ((desplazamiento % 26) - 26) % 26;
  return texto.replace(
    /[A-Z]/gi,
    (c) => letras[(letras.indexOf(c) - desplazamiento) % 26]
  );
}*/
