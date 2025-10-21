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
function obtenerPuntosMasAlejados(puntos: Punto[]): { puntosMasAlejados: Punto[]; tiempoDeEjecucion: number } {
  if (puntos.length < 2) {
    return { puntosMasAlejados: [], tiempoDeEjecucion: 0 };
  }

  let maxDistancia = 0;
  let puntosMasAlejados: Punto[] = [];

  const startTime = performance.now();

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

const resultadoEjemplo1 = obtenerPuntosMasAlejados(ejemplo1);

console.log('Ejemplo 1 - Forma Ingenua - Resultado  - ', ejemplo1.length, 'elementos:', resultadoEjemplo1.puntosMasAlejados);
console.log('Ejemplo 1 - Forma Ingenua - Tiempo de ejecucion - ', ejemplo1.length, 'elementos:', resultadoEjemplo1.tiempoDeEjecucion);
