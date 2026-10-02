



/* 

export function extraerSubstring(texto, caracter, desplazamiento, longitud) {
  // Buscar la primera aparición del carácter
  const posicion = texto.indexOf(caracter);
  
  if (posicion === -1) {
    return null; // no se encontró el carácter
  }

  // Calcular posición inicial sumando el desplazamiento
  const inicio = posicion + desplazamiento;

  // Extraer el substring desde la nueva posición, con la longitud indicada
  return texto.substring(inicio, inicio + longitud);
}
 */

export function extraerSubstring(texto) {
  // Buscar el marcador inicial: `"M"`
  const inicio = texto.indexOf('"M"');
  if (inicio === -1) return null; // no se encontró

  // Buscar la siguiente comilla después de "M"
  const desde = inicio + 3; // salta las 3 posiciones de "M"
  const fin = texto.indexOf('"', desde);
  if (fin === -1) return null; // no se encontró cierre

  // Extraer el substring entre "M" y la próxima comilla
  return texto.substring(desde, fin);
}

