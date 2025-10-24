export {};

type Punto = {
  x: number;
  y: number;
};

const ejemplo1: Punto[] = [
  { x: 2, y: 2 },
  { x: 4, y: 4 },
  { x: 6, y: 6 },
  { x: 22, y: 22 },
  { x: -22, y: -22 },
];
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

//

const startTimeEjemplo1 = performance.now();
const ejemplo1Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo1);
const endTimeEjemplo1 = performance.now();
const tiempoDeEjecucionEjemplo1 = endTimeEjemplo1 - startTimeEjemplo1;
console.log('Ejemplo 1 - Forma Ingenua - Resultado  - ', ejemplo1.length, 'puntos:', ejemplo1Ingenua);
console.log('Ejemplo 1 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo1.length, 'puntos:', tiempoDeEjecucionEjemplo1);

//

const startTimeEjemplo2 = performance.now();
const ejemplo2Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo2);
const endTimeEjemplo2 = performance.now();
const tiempoDeEjecucionEjemplo2 = endTimeEjemplo2 - startTimeEjemplo2;
console.log('Ejemplo 2 - Forma Ingenua - Resultado  - ', ejemplo2.length, 'puntos:', ejemplo2Ingenua);
console.log('Ejemplo 2 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo2.length, 'puntos:', tiempoDeEjecucionEjemplo2);

//

const startTimeEjemplo3 = performance.now();
const ejemplo3Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo3);
const endTimeEjemplo3 = performance.now();
const tiempoDeEjecucionEjemplo3 = endTimeEjemplo3 - startTimeEjemplo3;
console.log('Ejemplo 3 - Forma Ingenua - Resultado  - ', ejemplo3.length, 'puntos:', ejemplo3Ingenua);
console.log('Ejemplo 3 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo3.length, 'puntos:', tiempoDeEjecucionEjemplo3);

//

const startTimeEjemplo4 = performance.now();
const ejemplo4Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo4);
const endTimeEjemplo4 = performance.now();
const tiempoDeEjecucionEjemplo4 = endTimeEjemplo4 - startTimeEjemplo4;
console.log('Ejemplo 4 - Forma Ingenua - Resultado  - ', ejemplo4.length, 'puntos:', ejemplo4Ingenua);
console.log('Ejemplo 4 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo4.length, 'puntos:', tiempoDeEjecucionEjemplo4);

//

const startTimeEjemplo5 = performance.now();
const ejemplo5Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo5);
const endTimeEjemplo5 = performance.now();
const tiempoDeEjecucionEjemplo5 = endTimeEjemplo5 - startTimeEjemplo5;
console.log('Ejemplo 5 - Forma Ingenua - Resultado  - ', ejemplo5.length, 'puntos:', ejemplo5Ingenua);
console.log('Ejemplo 5 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo5.length, 'puntos:', tiempoDeEjecucionEjemplo5);

// Funcion para encontrar los dos puntos mas cercanos - DIVIDE AND CONQUER
function obtenerPuntosMasCercanosDivideAndConquer(puntos: Punto[]): { puntosMasCercanos: Punto[]; tiempoDeEjecucion: number } {
  const startTime = performance.now();

  // algoritmo divide and conquer aca

  const endTime = performance.now();

  const tiempoDeEjecucion = endTime - startTime;

  return { puntosMasCercanos: [], tiempoDeEjecucion };
}

function generarListaDePuntosAleatorios(cantidad: number, rango: number): Punto[] {
  const puntos: Punto[] = [];
  for (let i = 0; i < cantidad; i++) {
    const x = Math.floor(Math.random() * rango * 2) - rango;
    const y = Math.floor(Math.random() * rango * 2) - rango;
    puntos.push({ x, y });
  }
  return puntos;
}
