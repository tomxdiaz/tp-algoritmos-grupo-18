export {};

type Actividad = {
  inicio: number;
  fin: number;
};

const ejemplo1: Actividad[] = [
  { inicio: 1, fin: 3 },
  { inicio: 2, fin: 4 },
  { inicio: 3, fin: 5 },
  { inicio: 0, fin: 6 },
  { inicio: 5, fin: 7 },
];

function actividades(actividades: Actividad[]): Actividad[] {
  const actividadesOrdenadas = actividades.sort((a, b) => a.fin - b.fin);
  const S: Actividad[] = [];
  let ultimoFin = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < actividadesOrdenadas.length; i++) {
    const actividadActual = actividadesOrdenadas[i];
    if (actividadActual.inicio > ultimoFin) {
      S.push(actividadActual);
      ultimoFin = actividadActual.fin;
    }
  }
  return S;
}

const ejemplo1Ingenua = obtenerPuntosMasCercanosIngenua(ejemplo1);
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

function generarListaDeActividadesAleatorias(cantidad: number, rango: number): Actividad[] {
  const actividades: Actividad[] = [];
  for (let i = 0; i < cantidad; i++) {
    const inicio = Math.floor(Math.random() * rango);
    const fin = inicio + Math.floor(Math.random() * (rango - inicio));
    actividades.push({ inicio, fin });
  }
  return actividades;
}
