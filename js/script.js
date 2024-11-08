// Lista de agentes actuales en VALORANT
const agentes = {
  "Astra": "images/Astra.jpg",
  "Breach": "images/Breach.jpg",
  "Brimstone": "images/Brimstone.jpg",
  "Chamber": "images/Chamber.jpg",
  "Cypher": "images/Cypher.jpg",
  "Fade": "images/Fade.jpg",
  "Harbor": "images/Harbor.jpg",
  "Jett": "images/Jett.jpg",
  "KAY/O": "images/Kayo.jpg",
  "Killjoy": "images/Killjoy.jpg",
  "Neon": "images/Neon.jpg",
  "Omen": "images/Omen.jpg",
  "Phoenix": "images/Phoenix.jpg",
  "Raze": "images/Raze.jpg",
  "Reyna": "images/Reyna.jpg",
  "Sage": "images/Sage.jpg",
  "Skye": "images/Skye.jpg",
  "Sova": "images/Sova.jpg",
  "Viper": "images/Viper.jpg",
  "Iso": "images/Iso.jpg",
  "Clove": "images/Clove.jpg",
  "Vyse": "images/Vyse.jpg",
  "Yoru": "images/Yoru.jpg"
};
  // Función para seleccionar un agente aleatorio
  function mostrarMensaje() {
    const indiceAleatorio = Math.floor(Math.random() * agentes.length);
    const agenteSeleccionado = agentes[indiceAleatorio];
    alert("Agente recomendado: " + agenteSeleccionado);
  }