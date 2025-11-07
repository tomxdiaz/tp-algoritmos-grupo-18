export {};

type Vertice = {
  nombre: number;
};

type Arista = {
  origen: number;
  destino: number;
  peso: number;
};

type Grafo = {
  vertices: Vertice[];
  aristas: Arista[];
  matriz: number[][]; // Matriz de adyacencia para acceso O(1)
};

// Inicializa un grafo R con los mismos vértices que G pero sin aristas
function inicializarGrafo(G: Grafo): Grafo {
  const n = G.vertices.length;
  const matriz: number[][] = Array(n)
    .fill(0)
    .map(() => Array(n).fill(Infinity));

  // La diagonal es 0 (distancia de un vértice a sí mismo)
  for (let i = 0; i < n; i++) {
    matriz[i][i] = 0;
  }

  return {
    vertices: [...G.vertices],
    aristas: [],
    matriz,
  };
}

// Copia todas las aristas del grafo G al grafo R
function copiarGrafo(G: Grafo, R: Grafo): void {
  for (const arista of G.aristas) {
    R.aristas.push({ ...arista });
  }

  // Copiar la matriz de adyacencia
  const n = G.vertices.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      R.matriz[i][j] = G.matriz[i][j];
    }
  }
}

// Verifica si existe una arista entre dos vértices en el grafo
// Complejidad: O(1) usando matriz de adyacencia
function existeArista(grafo: Grafo, origen: number, destino: number): boolean {
  const i = origen - 1; // Convertir a índice 0-based
  const j = destino - 1;
  return grafo.matriz[i][j] !== Infinity;
}

// Obtiene el peso de una arista específica en el grafo
// Retorna Infinity si la arista no existe
// Complejidad: O(1) usando matriz de adyacencia
function pesoArista(grafo: Grafo, origen: number, destino: number): number {
  const i = origen - 1; // Convertir a índice 0-based
  const j = destino - 1;
  return grafo.matriz[i][j];
}

// Agrega o actualiza una arista en el grafo
// Si la arista ya existe, actualiza su peso
// Complejidad: O(1) usando matriz de adyacencia (+ O(E) para mantener sincronizado el array de aristas)
function agregarArista(grafo: Grafo, origen: number, destino: number, peso: number): void {
  const i = origen - 1; // Convertir a índice 0-based
  const j = destino - 1;

  // Actualizar matriz de adyacencia - O(1)
  grafo.matriz[i][j] = peso;

  // Mantener sincronizado el array de aristas para compatibilidad
  const aristaExistente = grafo.aristas.find((a) => a.origen === origen && a.destino === destino);
  if (aristaExistente) {
    aristaExistente.peso = peso;
  } else {
    grafo.aristas.push({ origen, destino, peso });
  }
}

// Algoritmo de Floyd-Warshall para encontrar los caminos más cortos entre todos los pares de vértices
// Entrada: G grafo de entrada
// Salida: R grafo con una arista con la distancia mínima entre cada par de vértices
function floydWarshall(G: Grafo): Grafo {
  // Inicializar grafo R
  const R = inicializarGrafo(G);

  // Copiar grafo G a R
  copiarGrafo(G, R);

  // Obtener vértices
  const VerticesK = G.vertices;

  // Para cada vértice k (intermedio)
  for (const k of VerticesK) {
    const VerticesI = G.vertices;

    // Para cada vértice i (origen)
    for (const i of VerticesI) {
      const VerticesJ = G.vertices;

      // Para cada vértice j (destino)
      for (const j of VerticesJ) {
        // Si i ≠ j Y existe arista(R, i, k) Y existe arista(R, k, j)
        if (i.nombre !== j.nombre && existeArista(R, i.nombre, k.nombre) && existeArista(R, k.nombre, j.nombre)) {
          const pesoIK = pesoArista(R, i.nombre, k.nombre); // O(1)
          const pesoKJ = pesoArista(R, k.nombre, j.nombre); // O(1)
          const pesoIJ = pesoArista(R, i.nombre, j.nombre); // O(1)

          // Si existe arista(R, i, j)
          if (existeArista(R, i.nombre, j.nombre)) {
            // O(1)
            // Si peso(i, k) + peso(k, j) < peso(i, j)
            if (pesoIK + pesoKJ < pesoIJ) {
              agregarArista(R, i.nombre, j.nombre, pesoIK + pesoKJ); // O(1)
            }
          } else {
            // Si no existe arista, la agregamos con el nuevo peso
            agregarArista(R, i.nombre, j.nombre, pesoIK + pesoKJ); // O(1)
          }
        }
      }
    }
  }

  return R;
}

// Función auxiliar para construir un grafo con matriz de adyacencia
function construirGrafo(vertices: Vertice[], aristas: Arista[]): Grafo {
  const n = vertices.length;
  const matriz: number[][] = Array(n)
    .fill(0)
    .map(() => Array(n).fill(Infinity));

  // La diagonal es 0 (distancia de un vértice a sí mismo)
  for (let i = 0; i < n; i++) {
    matriz[i][i] = 0;
  }

  // Llenar la matriz con los pesos de las aristas
  for (const arista of aristas) {
    const i = arista.origen - 1; // Convertir a índice 0-based
    const j = arista.destino - 1;
    matriz[i][j] = arista.peso;
  }

  return {
    vertices,
    aristas,
    matriz,
  };
}

// Ejemplo de uso

const ejemploFloydWarshall: Grafo = construirGrafo(
  [{ nombre: 1 }, { nombre: 2 }, { nombre: 3 }, { nombre: 4 }],
  [
    { origen: 1, destino: 3, peso: 3 },
    { origen: 1, destino: 4, peso: 1 },
    { origen: 2, destino: 4, peso: 2 },
    { origen: 3, destino: 1, peso: 2 },
    { origen: 3, destino: 2, peso: 4 },
    { origen: 4, destino: 3, peso: 5 },
  ]
);

console.log('--- RESULTADO EJEMPLO FLOYD-WARSHALL ---');
console.log('Grafo de entrada:', ejemploFloydWarshall);
const startTimeEjemplo = performance.now();
const resultadoEjemploFloydWarshall = floydWarshall(ejemploFloydWarshall);
const endTimeEjemplo = performance.now();
const tiempoDeEjecucionEjemplo = endTimeEjemplo - startTimeEjemplo;
console.log(`Tiempo de ejecucion: ${tiempoDeEjecucionEjemplo.toFixed(3)}ms.`);
console.log('Resultado - Grafo con distancias mínimas entre todos los pares de vértices:', resultadoEjemploFloydWarshall);
