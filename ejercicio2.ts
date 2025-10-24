// Entrada:
// 	actividades: Lista de actividades (inicio, fin) de longitud "n"
// Salida:
// 	S: Lista de longitud máxima posible de actividades que no se superponen

// —--

// funcion actividades
// 	actividadesOrdenadas = ordenar(actividades)
// 	S = listaVacia()
// 	ultimoFin = Menos Infinito
// 	para i = 0 hasta actividadesOrdenadas.longitud  - 1:
// 		actividadActual = actividadesOrdenadas[i]
// 		si actividadActual.inicio > ultimoFin:
// 			S.agregar(actividadActual)
// 			ultimoFin= actividadActual.fin
// 		fin si
// 	fin para
// 	devolver S
// fin funcion

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
