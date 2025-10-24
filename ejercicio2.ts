export {};

type Actividad = {
  inicio: number;
  fin: number;
};

const ejemplo1: Actividad[] = [
  { inicio: 1, fin: 2 },
  { inicio: 3, fin: 4 },
  { inicio: 5, fin: 6 },
  { inicio: 7, fin: 8 },
  { inicio: 8, fin: 10 },
]; // Respuesta esperada: 4 actividades no solapadas

const ejemplo2: Actividad[] = generarListaDeActividadesAleatorias(50, 50);
const ejemplo3: Actividad[] = generarListaDeActividadesAleatorias(500, 500);
const ejemplo4: Actividad[] = generarListaDeActividadesAleatorias(5000, 5000);
const ejemplo5: Actividad[] = generarListaDeActividadesAleatorias(20000, 20000);

// Funcion para encontrar la mayor cantidad de actividades no solapadas - FORMA GREEDY
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

//

const startTimeEjemplo1 = performance.now();
const ejemplo1Greedy = actividades(ejemplo1);
const endTimeEjemplo1 = performance.now();
const tiempoDeEjecucionEjemplo1 = endTimeEjemplo1 - startTimeEjemplo1;
console.log('Ejemplo 1 - Forma Greedy - Resultado  - ', ejemplo1.length, 'actividades - cantidad de no solapadas:', ejemplo1Greedy.length);
console.log('Ejemplo 1 - Forma Greedy - Tiempo de ejecucion - ', ejemplo1.length, 'actividades:', tiempoDeEjecucionEjemplo1);

//

const startTimeEjemplo2 = performance.now();
const ejemplo2Greedy = actividades(ejemplo2);
const endTimeEjemplo2 = performance.now();
const tiempoDeEjecucionEjemplo2 = endTimeEjemplo2 - startTimeEjemplo2;
console.log('Ejemplo 2 - Forma Greedy - Resultado  - ', ejemplo2.length, 'actividades - cantidad de no solapadas:', ejemplo2Greedy.length);
console.log('Ejemplo 2 - Forma Greedy - Tiempo de ejecucion - ', ejemplo2.length, 'actividades:', tiempoDeEjecucionEjemplo2);

//

const startTimeEjemplo3 = performance.now();
const ejemplo3Greedy = actividades(ejemplo3);
const endTimeEjemplo3 = performance.now();
const tiempoDeEjecucionEjemplo3 = endTimeEjemplo3 - startTimeEjemplo3;
console.log('Ejemplo 3 - Forma Greedy - Resultado  - ', ejemplo3.length, 'actividades - cantidad de no solapadas:', ejemplo3Greedy.length);
console.log('Ejemplo 3 - Forma Greedy - Tiempo de ejecucion - ', ejemplo3.length, 'actividades:', tiempoDeEjecucionEjemplo3);

//

const startTimeEjemplo4 = performance.now();
const ejemplo4Greedy = actividades(ejemplo4);
const endTimeEjemplo4 = performance.now();
const tiempoDeEjecucionEjemplo4 = endTimeEjemplo4 - startTimeEjemplo4;
console.log('Ejemplo 4 - Forma Greedy - Resultado  - ', ejemplo4.length, 'actividades - cantidad de no solapadas:', ejemplo4Greedy.length);
console.log('Ejemplo 4 - Forma Greedy - Tiempo de ejecucion - ', ejemplo4.length, 'actividades:', tiempoDeEjecucionEjemplo4);

//

const startTimeEjemplo5 = performance.now();
const ejemplo5Greedy = actividades(ejemplo5);
const endTimeEjemplo5 = performance.now();
const tiempoDeEjecucionEjemplo5 = endTimeEjemplo5 - startTimeEjemplo5;
console.log('Ejemplo 5 - Forma Greedy - Resultado  - ', ejemplo5.length, 'actividades - cantidad de no solapadas:', ejemplo5Greedy.length);
console.log('Ejemplo 5 - Forma Greedy - Tiempo de ejecucion - ', ejemplo5.length, 'actividades:', tiempoDeEjecucionEjemplo5);

//

function generarListaDeActividadesAleatorias(cantidad: number, rango: number): Actividad[] {
  const actividades: Actividad[] = [];
  for (let i = 0; i < cantidad; i++) {
    const inicio = Math.floor(Math.random() * rango);
    const fin = inicio + Math.floor(Math.random() * (rango - inicio));
    actividades.push({ inicio, fin });
  }
  return actividades;
}
