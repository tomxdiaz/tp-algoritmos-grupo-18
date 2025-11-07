export {};

type Objeto = {
  peso: number;
  valor: number;
};

type Mochila = {
  capacidad: number;
  objetos: Objeto[];
};

const ejemplo1: Mochila = {
  capacidad: 10,
  objetos: [
    { peso: 6, valor: 30 },
    { peso: 3, valor: 14 },
    { peso: 4, valor: 16 },
  ],
}; // Respuesta esperada: 30? 46
const ejemplo2: Mochila = generarMochilaAleatoria(50, 20, 15, 100);
const ejemplo3: Mochila = generarMochilaAleatoria(100, 50, 20, 200);
const ejemplo4: Mochila = generarMochilaAleatoria(200, 100, 30, 300);
const ejemplo5: Mochila = generarMochilaAleatoria(500, 200, 50, 500);

// Funcion para encontrar la mayor cantidad de valor sin pasarse del peso - PROGRAMACION DINAMICA
function mochila(mochila: Mochila): number {
  const n = mochila.objetos.length;
  const w = mochila.capacidad;
  const matriz: number[][] = Array.from({ length: n + 1 }, () => Array(w + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    const objetoActual = mochila.objetos[i - 1];
    for (let pesoActual = 0; pesoActual <= w; pesoActual++) {
      if (objetoActual.peso <= pesoActual) {
        matriz[i][pesoActual] = Math.max(matriz[i - 1][pesoActual], matriz[i - 1][pesoActual - objetoActual.peso] + objetoActual.valor);
      } else {
        matriz[i][pesoActual] = matriz[i - 1][pesoActual];
      }
    }
  }
  return matriz[n][w];
}

//
console.log('--- EJEMPLO 1 PROGRAMACION DINAMICA ---');
const startTimeEjemplo1 = performance.now();
const ejemplo1Dinamico = mochila(ejemplo1);
const endTimeEjemplo1 = performance.now();
const tiempoDeEjecucionEjemplo1 = endTimeEjemplo1 - startTimeEjemplo1;
console.log(`Resultado para ${ejemplo1.objetos.length} objetos: ${ejemplo1Dinamico}`);
console.log(`Tiempo de ejecucion: ${tiempoDeEjecucionEjemplo1.toFixed(3)}ms`);
//
console.log('--- EJEMPLO 2 PROGRAMACION DINAMICA ---');
const startTimeEjemplo2 = performance.now();
const ejemplo2Dinamico = mochila(ejemplo2);
const endTimeEjemplo2 = performance.now();
const tiempoDeEjecucionEjemplo2 = endTimeEjemplo2 - startTimeEjemplo2;
console.log(`Resultado para ${ejemplo2.objetos.length} objetos: ${ejemplo2Dinamico}`);
console.log(`Tiempo de ejecucion: ${tiempoDeEjecucionEjemplo2.toFixed(3)}ms`);
//
console.log('--- EJEMPLO 3 PROGRAMACION DINAMICA ---');
const startTimeEjemplo3 = performance.now();
const ejemplo3Dinamico = mochila(ejemplo3);
const endTimeEjemplo3 = performance.now();
const tiempoDeEjecucionEjemplo3 = endTimeEjemplo3 - startTimeEjemplo3;
console.log(`Resultado para ${ejemplo3.objetos.length} objetos: ${ejemplo3Dinamico}`);
console.log(`Tiempo de ejecucion: ${tiempoDeEjecucionEjemplo3.toFixed(3)}ms`);
//
console.log('--- EJEMPLO 4 PROGRAMACION DINAMICA ---');
const startTimeEjemplo4 = performance.now();
const ejemplo4Dinamico = mochila(ejemplo4);
const endTimeEjemplo4 = performance.now();
const tiempoDeEjecucionEjemplo4 = endTimeEjemplo4 - startTimeEjemplo4;
console.log(`Resultado para ${ejemplo4.objetos.length} objetos: ${ejemplo4Dinamico}`);
console.log(`Tiempo de ejecucion: ${tiempoDeEjecucionEjemplo4.toFixed(3)}ms`);
//
console.log('--- EJEMPLO 5 PROGRAMACION DINAMICA ---');
const startTimeEjemplo5 = performance.now();
const ejemplo5Dinamico = mochila(ejemplo5);
const endTimeEjemplo5 = performance.now();
const tiempoDeEjecucionEjemplo5 = endTimeEjemplo5 - startTimeEjemplo5;
console.log(`Resultado para ${ejemplo5.objetos.length} objetos: ${ejemplo5Dinamico}`);
console.log(`Tiempo de ejecucion: ${tiempoDeEjecucionEjemplo5.toFixed(3)}ms`);
//

function generarMochilaAleatoria(pesoMaximo: number, cantidadObjetos: number, rangoPeso: number, rangoValor: number): Mochila {
  const objetos: Objeto[] = [];
  for (let i = 0; i < cantidadObjetos; i++) {
    const peso = Math.floor(Math.random() * rangoPeso) + 1;
    const valor = Math.floor(Math.random() * rangoValor) + 1;
    objetos.push({ peso, valor });
  }
  return {
    capacidad: pesoMaximo,
    objetos,
  };
}
