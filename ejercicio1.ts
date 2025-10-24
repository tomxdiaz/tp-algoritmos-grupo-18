export {};

type Punto = {
  x: number;
  y: number;
};

const ejemplo1: Punto[] = [
  { x: -22, y: -22 },
  { x: -1, y: -1 },
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 22, y: 22 },
]; // Respuesta esperada: [{x: -1, y: -1}, {x: 0, y:0}]
const ejemplo2: Punto[] = generarListaDePuntosAleatorios(50, 50);
const ejemplo3: Punto[] = generarListaDePuntosAleatorios(500, 500);
const ejemplo4: Punto[] = generarListaDePuntosAleatorios(5000, 5000);
const ejemplo5: Punto[] = generarListaDePuntosAleatorios(20000, 20000);

// Funcion para encontrar los dos puntos mas cercanos - FORMA INGENUA
function obtenerPuntosMasCercanosIngenua(puntos: Punto[]): Punto[] {
  if (puntos.length <= 2) {
    return puntos;
  }

  let minDistancia = Infinity;
  let puntosMasCercanos: Punto[] = [];

  for (let i = 0; i < puntos.length; i++) {
    for (let j = i + 1; j < puntos.length; j++) {
      const dx = puntos[i].x - puntos[j].x;
      const dy = puntos[i].y - puntos[j].y;
      const distancia = Math.sqrt(dx * dx + dy * dy);
      if (distancia < minDistancia) {
        minDistancia = distancia;
        puntosMasCercanos = [puntos[i], puntos[j]];
      }
    }
  }

  return puntosMasCercanos;
}

// Funcion para calcular distancia entre dos puntos
function calcularDistancia(p1: Punto, p2: Punto): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Funcion para encontrar los dos puntos mas cercanos - DIVIDE AND CONQUER
function obtenerPuntosMasCercanosDivideAndConquer(puntos: Punto[]): Punto[] {
  // Ordenar puntos por X - O(n log n)
  const puntosOrdenadosX = [...puntos].sort((a, b) => a.x - b.x);
  // Ordenar puntos por Y para optimizar la búsqueda en la franja - O(n log n)
  const puntosOrdenadosY = [...puntos].sort((a, b) => a.y - b.y);

  return funcionRecursiva(puntosOrdenadosX, puntosOrdenadosY);
}

// Funcion recursiva para encontrar los puntos más cercanos - DIVIDE AND CONQUER
function funcionRecursiva(puntosX: Punto[], puntosY: Punto[]): Punto[] {
  const n = puntosX.length;

  // Caso base: si hay 3 o menos puntos, usar fuerza bruta - O(1)
  if (n <= 3) {
    return obtenerPuntosMasCercanosIngenua(puntosX);
  }

  // Dividir los puntos en dos mitades
  const mitad = Math.floor(n / 2);
  const puntoMedio = puntosX[mitad];

  // Dividir puntosX
  const izquierdaX = puntosX.slice(0, mitad);
  const derechaX = puntosX.slice(mitad);

  // Dividir puntosY según si están a la izquierda o derecha de la línea divisoria - O(n)
  const izquierdaY: Punto[] = [];
  const derechaY: Punto[] = [];
  for (const punto of puntosY) {
    if (punto.x <= puntoMedio.x && izquierdaY.length < mitad) {
      izquierdaY.push(punto);
    } else {
      derechaY.push(punto);
    }
  }

  // Encontrar los puntos más cercanos en cada mitad recursivamente - T(n/2) + T(n/2)
  const puntosMasCercanosIzquierda = funcionRecursiva(izquierdaX, izquierdaY);
  const puntosMasCercanosDerecha = funcionRecursiva(derechaX, derechaY);

  // Determinar el mínimo de las dos mitades
  const distanciaIzq = calcularDistancia(puntosMasCercanosIzquierda[0], puntosMasCercanosIzquierda[1]);
  const distanciaDer = calcularDistancia(puntosMasCercanosDerecha[0], puntosMasCercanosDerecha[1]);

  let delta: number;
  let mejorPar: Punto[];

  if (distanciaIzq < distanciaDer) {
    delta = distanciaIzq;
    mejorPar = puntosMasCercanosIzquierda;
  } else {
    delta = distanciaDer;
    mejorPar = puntosMasCercanosDerecha;
  }

  // Encontrar puntos en la franja central (dentro de delta de la línea divisoria) - O(n)
  const franja: Punto[] = [];
  for (const punto of puntosY) {
    if (Math.abs(punto.x - puntoMedio.x) < delta) {
      franja.push(punto);
    }
  }

  // Verificar puntos en la franja - O(n) en el peor caso, pero amortizado O(n) total
  // Solo necesitamos verificar hasta 7 puntos siguientes para cada punto
  for (let i = 0; i < franja.length; i++) {
    for (let j = i + 1; j < franja.length && franja[j].y - franja[i].y < delta; j++) {
      const distancia = calcularDistancia(franja[i], franja[j]);
      if (distancia < delta) {
        delta = distancia;
        mejorPar = [franja[i], franja[j]];
      }
    }
  }

  return mejorPar;
}

// Ejecución y medición de tiempos
const startTimeEjemplo1Ingenua = performance.now();
const ejemplo1Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo1);
const endTimeEjemplo1Ingenua = performance.now();
const tiempoDeEjecucionEjemplo1Ingenua = endTimeEjemplo1Ingenua - startTimeEjemplo1Ingenua;
//
const startTimeEjemplo2Ingenua = performance.now();
const ejemplo2Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo2);
const endTimeEjemplo2Ingenua = performance.now();
const tiempoDeEjecucionEjemplo2Ingenua = endTimeEjemplo2Ingenua - startTimeEjemplo2Ingenua;
//
const startTimeEjemplo3Ingenua = performance.now();
const ejemplo3Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo3);
const endTimeEjemplo3Ingenua = performance.now();
const tiempoDeEjecucionEjemplo3Ingenua = endTimeEjemplo3Ingenua - startTimeEjemplo3Ingenua;
//
const startTimeEjemplo4Ingenua = performance.now();
const ejemplo4Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo4);
const endTimeEjemplo4Ingenua = performance.now();
const tiempoDeEjecucionEjemplo4Ingenua = endTimeEjemplo4Ingenua - startTimeEjemplo4Ingenua;
//
const startTimeEjemplo5Ingenua = performance.now();
const ejemplo5Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo5);
const endTimeEjemplo5Ingenua = performance.now();
const tiempoDeEjecucionEjemplo5Ingenua = endTimeEjemplo5Ingenua - startTimeEjemplo5Ingenua;
//
const startTimeEjemplo1DAC = performance.now();
const ejemplo1DAC = obtenerPuntosMasCercanosDivideAndConquer(ejemplo1);
const endTimeEjemplo1DAC = performance.now();
const tiempoDeEjecucionEjemplo1DAC = endTimeEjemplo1DAC - startTimeEjemplo1DAC;
//
const startTimeEjemplo2DAC = performance.now();
const ejemplo2DAC = obtenerPuntosMasCercanosDivideAndConquer(ejemplo2);
const endTimeEjemplo2DAC = performance.now();
const tiempoDeEjecucionEjemplo2DAC = endTimeEjemplo2DAC - startTimeEjemplo2DAC;
//
const startTimeEjemplo3DAC = performance.now();
const ejemplo3DAC = obtenerPuntosMasCercanosDivideAndConquer(ejemplo3);
const endTimeEjemplo3DAC = performance.now();
const tiempoDeEjecucionEjemplo3DAC = endTimeEjemplo3DAC - startTimeEjemplo3DAC;
//
const startTimeEjemplo4DAC = performance.now();
const ejemplo4DAC = obtenerPuntosMasCercanosDivideAndConquer(ejemplo4);
const endTimeEjemplo4DAC = performance.now();
const tiempoDeEjecucionEjemplo4DAC = endTimeEjemplo4DAC - startTimeEjemplo4DAC;
//
const startTimeEjemplo5DAC = performance.now();
const ejemplo5DAC = obtenerPuntosMasCercanosDivideAndConquer(ejemplo5);
const endTimeEjemplo5DAC = performance.now();
const tiempoDeEjecucionEjemplo5DAC = endTimeEjemplo5DAC - startTimeEjemplo5DAC;

//
console.log('\n--- INICIO COMPARACIÓN DE TIEMPOS ---\n');
//
console.log(
  `Ejemplo 1 (${ejemplo1.length} puntos): Ingenua = ${tiempoDeEjecucionEjemplo1Ingenua.toFixed(
    3
  )}ms vs DAC = ${tiempoDeEjecucionEjemplo1DAC.toFixed(3)}ms`
);
console.log(
  `Ejemplo 2 (${ejemplo2.length} puntos): Ingenua = ${tiempoDeEjecucionEjemplo2Ingenua.toFixed(
    3
  )}ms vs DAC = ${tiempoDeEjecucionEjemplo2DAC.toFixed(3)}ms`
);
console.log(
  `Ejemplo 3 (${ejemplo3.length} puntos): Ingenua = ${tiempoDeEjecucionEjemplo3Ingenua.toFixed(
    3
  )}ms vs DAC = ${tiempoDeEjecucionEjemplo3DAC.toFixed(3)}ms`
);
console.log(
  `Ejemplo 4 (${ejemplo4.length} puntos): Ingenua = ${tiempoDeEjecucionEjemplo4Ingenua.toFixed(
    3
  )}ms vs DAC = ${tiempoDeEjecucionEjemplo4DAC.toFixed(3)}ms`
);
console.log(
  `Ejemplo 5 (${ejemplo5.length} puntos): Ingenua = ${tiempoDeEjecucionEjemplo5Ingenua.toFixed(
    3
  )}ms vs DAC = ${tiempoDeEjecucionEjemplo5DAC.toFixed(3)}ms`
);
//
console.log('\n--- FIN COMPARACIÓN DE TIEMPOS ---\n');
//

function generarListaDePuntosAleatorios(cantidad: number, rango: number): Punto[] {
  const puntos: Punto[] = [];
  for (let i = 0; i < cantidad; i++) {
    const x = Math.floor(Math.random() * rango * 2) - rango;
    const y = Math.floor(Math.random() * rango * 2) - rango;
    puntos.push({ x, y });
  }
  return puntos;
}
