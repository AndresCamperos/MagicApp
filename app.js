
function barajear() {

  console.log('Barajeando...')

  for (let i = 0; i <= 18; i = i + 3) {
    fila1[fila1.length] = pilon[i]
  }
  for (let i = 1; i <= 19; i = i + 3) {
    fila2[fila2.length] = pilon[i]
  }
  for (let i = 2; i <= 20; i = i + 3) {
    fila3[fila3.length] = pilon[i]
  }
}

function vaciarFilas() {
  console.log('Borrando Filas')
  fila1 = []
  fila2 = []
  fila3 = []

}

function mostarFilas() {

  console.log('Escoje Una Fila:  ')
  console.log(fila1)
  console.log(fila2)
  console.log(fila3)
}


//muestro la pila
var fila1 = [1, 2, 3, 4, 5, 6, 7];
var fila2 = [8, 9, 10, 11, 12, 13, 14];
var fila3 = [15, 16, 17, 18, 19, 20, 21];

mostarFilas()

// inicio del juego ciclo de 3 veces
for (i = 0; i < 3; i++) {

  seleccion = prompt('En que fila esta tu numero: 1,2 o 3 ?')

  switch (seleccion) {
    case '1':
      //odeno las filas
      orden = fila2
      fila2 = fila1
      fila1 = orden

      console.log('Seleccion 1, se ordena')
      mostarFilas()


      //se recoje el pilon
      var pilon = fila1.concat(fila2).concat(fila3)

      console.log('Mostrando pilon:')
      console.log(pilon)

      vaciarFilas()

      barajear()

      console.log(fila1)
      console.log(fila2)
      console.log(fila3)

      break;
    case '2':
      //las filas se quedan igual
      console.log('Seleccion 2 no hay cambios')
      mostarFilas()

      //se recoje el pilon
      var pilon = fila1.concat(fila2).concat(fila3)

      console.log('Mostrando pilon:')
      console.log(pilon)

      vaciarFilas()
      barajear()
      mostarFilas()
      break;

    case '3':
      //odeno las filas
      console.log('Seleccion 3: Se ordena las filas')

      orden = fila3
      fila3 = fila2
      fila2 = orden

     mostarFilas()
     //se recoje el pilon
     var pilon = fila1.concat(fila2).concat(fila3)
     vaciarFilas()
     barajear()
     mostarFilas()

      break;


  }
}


console.log('Tu numero favorito es: ' + fila2[3])