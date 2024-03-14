const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];
function obtenerMenoresQueOcho(numeros) {
    const numerosMenores = numeros.filter(numero => numero < 8);
    return numerosMenores;
  }
  function obtenerMayoresOIgualesQueOcho(numeros) {
    const numerosMayores = numeros.filter(numero => numero >= 8);
    return numerosMayores;
  }
  function obtenerCantidadElementos(numeros) {
    const cantidadElementos = numeros.length;
    return cantidadElementos;
  }
  const numerosMenoresQueOcho = obtenerMenoresQueOcho(fibonacci);
  const numerosMayoresOIgualesQueOcho = obtenerMayoresOIgualesQueOcho(fibonacci);
  const cantidadElementosFibonacci = obtenerCantidadElementos(fibonacci);
  
 
  const contenedor = document.querySelector(".container");
contenedor.innerHTML = `Existen ${numerosMenoresQueOcho.length} números menores que 8 y existen ${numerosMayoresOIgualesQueOcho.length} números mayores o iguales que 8`;
  
