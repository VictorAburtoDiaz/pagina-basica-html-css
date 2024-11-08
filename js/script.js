// Lista de agentes actuales en VALORANT
const agentes = [
    "Astra", "Breach", "Brimstone", "Chamber", "Cypher",
    "Fade", "Harbor", "Jett", "KAY/O", "Killjoy",
    "Neon", "Omen", "Phoenix", "Raze", "Reyna",
    "Sage", "Skye", "Sova", "Viper", "Yoru", "Deadlock", "Iso","Clove","Vyse"
  ];
  
  // Función para seleccionar un agente aleatorio
  function mostrarMensaje() {
    const indiceAleatorio = Math.floor(Math.random() * agentes.length);
    const agenteSeleccionado = agentes[indiceAleatorio];
    alert("Agente recomendado: " + agenteSeleccionado);
  }