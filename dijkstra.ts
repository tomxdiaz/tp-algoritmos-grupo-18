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
// Complejidad: O(1) usando matriz de adyacencia
function agregarArista(grafo: Grafo, origen: number, destino: number, peso: number): void {
  const i = origen - 1; // Convertir a índice 0-based
  const j = destino - 1;

  // Actualizar matriz de adyacencia - O(1)
  grafo.matriz[i][j] = peso;
}

function dijkstra(G: Grafo, v: number): number[] {
  const Visitados = new Set<number>([v]);
  const A = inicializarGrafo(G);

  // Agregar todos los vértices a A
  for (const w of G.vertices) {
    // los vértices ya están en inicializarGrafo
  }

  // Agregar aristas adyacentes al vértice inicial
  for (const arista of G.aristas) {
    if (arista.origen === v) {
      agregarArista(A, v, arista.destino, arista.peso);
    }
  }

  let Pendientes = G.vertices.map((x) => x.nombre).filter((x) => !Visitados.has(x));

  // Mientras queden pendientes
  while (Pendientes.length > 0) {
    // Buscar w con peso mínimo desde v
    let w: number | null = null;
    let minPeso = Infinity;

    for (const n of Pendientes) {
      const peso = pesoArista(A, v, n);
      if (peso < minPeso) {
        minPeso = peso;
        w = n;
      }
    }

    if (w === null) break;

    Visitados.add(w);
    Pendientes = Pendientes.filter((x) => x !== w);

    // Recorremos los pendientes restantes
    const auxPendientes = [...Pendientes];
    for (const p of auxPendientes) {
      if (existeArista(A, v, w) && existeArista(G, w, p)) {
        const nuevoPeso = pesoArista(A, v, w) + pesoArista(G, w, p);
        if (existeArista(A, v, p)) {
          if (nuevoPeso < pesoArista(A, v, p)) {
            agregarArista(A, v, p, nuevoPeso);
          }
        } else {
          agregarArista(A, v, p, nuevoPeso);
        }
      }
    }
  }

  return A.matriz[v - 1]; // Retornar solo la fila correspondiente al vértice de inicio
}

export { dijkstra };
