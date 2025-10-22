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
function obtenerPuntosMasCercanosIngenua(puntos: Punto[]): { puntosMasCercanos: Punto[]; tiempoDeEjecucion: number } {
  if (puntos.length <= 2) {
    return { puntosMasCercanos: puntos, tiempoDeEjecucion: 0 };
  }

  const startTime = performance.now();

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

  const endTime = performance.now();

  const tiempoDeEjecucion = endTime - startTime;

  return { puntosMasCercanos, tiempoDeEjecucion };
}

const ejemplo1Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo1);

console.log('Ejemplo 1 - Forma Ingenua - Resultado  - ', ejemplo1.length, 'puntos:', ejemplo1Ingenua.puntosMasCercanos);
console.log('Ejemplo 1 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo1.length, 'puntos:', ejemplo1Ingenua.tiempoDeEjecucion);

const ejemplo2Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo2);

console.log('Ejemplo 2 - Forma Ingenua - Resultado  - ', ejemplo2.length, 'puntos:', ejemplo2Ingenua.puntosMasCercanos);
console.log('Ejemplo 2 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo2.length, 'puntos:', ejemplo2Ingenua.tiempoDeEjecucion);

const ejemplo3Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo3);

console.log('Ejemplo 3 - Forma Ingenua - Resultado  - ', ejemplo3.length, 'puntos:', ejemplo3Ingenua.puntosMasCercanos);
console.log('Ejemplo 3 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo3.length, 'puntos:', ejemplo3Ingenua.tiempoDeEjecucion);

const ejemplo4Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo4);

console.log('Ejemplo 4 - Forma Ingenua - Resultado  - ', ejemplo4.length, 'puntos:', ejemplo4Ingenua.puntosMasCercanos);
console.log('Ejemplo 4 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo4.length, 'puntos:', ejemplo4Ingenua.tiempoDeEjecucion);

const ejemplo5Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo5);

console.log('Ejemplo 5 - Forma Ingenua - Resultado  - ', ejemplo5.length, 'puntos:', ejemplo5Ingenua.puntosMasCercanos);
console.log('Ejemplo 5 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo5.length, 'puntos:', ejemplo5Ingenua.tiempoDeEjecucion);

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
