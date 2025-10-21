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

// Funcion para encontrar los dos puntos mas alejados - FORMA INGENUA
function obtenerPuntosMasAlejadosIngenua(puntos: Punto[]): { puntosMasAlejados: Punto[]; tiempoDeEjecucion: number } {
  if (puntos.length < 2) {
    return { puntosMasAlejados: [], tiempoDeEjecucion: 0 };
  }

  const startTime = performance.now();

  let maxDistancia = 0;
  let puntosMasAlejados: Punto[] = [];

  for (let i = 0; i < puntos.length; i++) {
    for (let j = i + 1; j < puntos.length; j++) {
      const dx = puntos[i].x - puntos[j].x;
      const dy = puntos[i].y - puntos[j].y;
      const distancia = Math.sqrt(dx * dx + dy * dy);
      if (distancia > maxDistancia) {
        maxDistancia = distancia;
        puntosMasAlejados = [puntos[i], puntos[j]];
      }
    }
  }

  const endTime = performance.now();

  const tiempoDeEjecucion = endTime - startTime;

  return { puntosMasAlejados, tiempoDeEjecucion };
}

const ejemplo1Ingenua = obtenerPuntosMasAlejadosIngenua(ejemplo1);

console.log('Ejemplo 1 - Forma Ingenua - Resultado  - ', ejemplo1.length, 'puntos:', ejemplo1Ingenua.puntosMasAlejados);
console.log('Ejemplo 1 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo1.length, 'puntos:', ejemplo1Ingenua.tiempoDeEjecucion);

// Funcion para encontrar los dos puntos mas alejados - DIVIDE AND CONQUER
function obtenerPuntosMasAlejadosDivideAndConquer(puntos: Punto[]): { puntosMasAlejados: Punto[]; tiempoDeEjecucion: number } {
  const startTime = performance.now();

  // algoritmo divide and conquer aca

  const endTime = performance.now();

  const tiempoDeEjecucion = endTime - startTime;

  return { puntosMasAlejados: [], tiempoDeEjecucion };
}
