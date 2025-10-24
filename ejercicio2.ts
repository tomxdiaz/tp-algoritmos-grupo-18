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
console.log('--- EJEMPLO 1 GREEDY ---');
const startTimeEjemplo1 = performance.now();
const ejemplo1Greedy = actividades(ejemplo1);
const endTimeEjemplo1 = performance.now();
const tiempoDeEjecucionEjemplo1 = endTimeEjemplo1 - startTimeEjemplo1;
console.log('Resultado para', ejemplo1.length, 'actividades:', ejemplo1Greedy.length, 'actividades no solapadas.');
console.log('Tiempo de ejecucion:', tiempoDeEjecucionEjemplo1.toFixed(3));
//
console.log('--- EJEMPLO 2 GREEDY ---');
const startTimeEjemplo2 = performance.now();
const ejemplo2Greedy = actividades(ejemplo2);
const endTimeEjemplo2 = performance.now();
const tiempoDeEjecucionEjemplo2 = endTimeEjemplo2 - startTimeEjemplo2;
console.log('Resultado para', ejemplo2.length, 'actividades:', ejemplo2Greedy.length, 'actividades no solapadas.');
console.log('Tiempo de ejecucion:', tiempoDeEjecucionEjemplo2.toFixed(3));
//
console.log('--- EJEMPLO 3 GREEDY ---');
const startTimeEjemplo3 = performance.now();
const ejemplo3Greedy = actividades(ejemplo3);
const endTimeEjemplo3 = performance.now();
const tiempoDeEjecucionEjemplo3 = endTimeEjemplo3 - startTimeEjemplo3;
console.log('Resultado para', ejemplo3.length, 'actividades:', ejemplo3Greedy.length, 'actividades no solapadas.');
console.log('Tiempo de ejecucion:', tiempoDeEjecucionEjemplo3.toFixed(3));
//
console.log('--- EJEMPLO 4 GREEDY ---');
const startTimeEjemplo4 = performance.now();
const ejemplo4Greedy = actividades(ejemplo4);
const endTimeEjemplo4 = performance.now();
const tiempoDeEjecucionEjemplo4 = endTimeEjemplo4 - startTimeEjemplo4;
console.log('Resultado para', ejemplo4.length, 'actividades:', ejemplo4Greedy.length, 'actividades no solapadas.');
console.log('Tiempo de ejecucion:', tiempoDeEjecucionEjemplo4.toFixed(3));
//
console.log('--- EJEMPLO 5 GREEDY ---');
const startTimeEjemplo5 = performance.now();
const ejemplo5Greedy = actividades(ejemplo5);
const endTimeEjemplo5 = performance.now();
const tiempoDeEjecucionEjemplo5 = endTimeEjemplo5 - startTimeEjemplo5;
console.log('Resultado para', ejemplo5.length, 'actividades:', ejemplo5Greedy.length, 'actividades no solapadas.');
console.log('Tiempo de ejecucion:', tiempoDeEjecucionEjemplo5.toFixed(3));
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
