// Lista de agentes actuales en VALORANT con sus rutas de imágenes y audios
const agentes = {
  "Astra": {
    "imagen": "images/Astra.jpg",
    "audio": "audio/astra.mp3"
  },
  "Breach": {
    "imagen": "images/Breach.jpg",
    "audio": "audio/breach.mp3"
  },
  "Brimstone": {
    "imagen": "images/Brimstone.jpg",
    "audio": "audio/brimstone.mp3"
  },
  "Chamber": {
    "imagen": "images/Chamber.jpg",
    "audio": "audio/chamber.mp3"
  },
  "Cypher": {
    "imagen": "images/Cypher.jpg",
    "audio": "audio/cypher.mp3"
  },
  "Fade": {
    "imagen": "images/Fade.jpg",
    "audio": "audio/fade.mp3"
  },
  "Harbor": {
    "imagen": "images/Harbor.jpg",
    "audio": "audio/harbor.mp3"
  },
  "Jett": {
    "imagen": "images/Jett.jpg",
    "audio": "audio/jett.mp3"
  },
  "KAY/O": {
    "imagen": "images/Kayo.jpg",
    "audio": "audio/kayo.mp3"
  },
  "Killjoy": {
    "imagen": "images/Killjoy.jpg",
    "audio": "audio/killjoy.mp3"
  },
  "Neon": {
    "imagen": "images/Neon.jpg",
    "audio": "audio/neon.mp3"
  },
  "Omen": {
    "imagen": "images/Omen.jpg",
    "audio": "audio/omen.mp3"
  },
  "Phoenix": {
    "imagen": "images/Phoenix.jpg",
    "audio": "audio/phoenix.mp3"
  },
  "Raze": {
    "imagen": "images/Raze.jpg",
    "audio": "audio/raze.mp3"
  },
  "Reyna": {
    "imagen": "images/Reyna.jpg",
    "audio": "audio/reyna.mp3"
  },
  "Sage": {
    "imagen": "images/Sage.jpg",
    "audio": "audio/sage.mp3"
  },
  "Skye": {
    "imagen": "images/Skye.jpg",
    "audio": "audio/skye.mp3"
  },
  "Sova": {
    "imagen": "images/Sova.jpg",
    "audio": "audio/sova.mp3"
  },
  "Viper": {
    "imagen": "images/Viper.jpg",
    "audio": "audio/viper.mp3"
  },
  "Yoru": {
    "imagen": "images/Yoru.jpg",
    "audio": "audio/yoru.mp3"
  }
};

// Función para seleccionar un agente aleatorio y mostrar su imagen y audio
function mostrarMensaje() {
  const agentesNombres = Object.keys(agentes); // Obtener nombres de agentes
  const indiceAleatorio = Math.floor(Math.random() * agentesNombres.length);
  const agenteSeleccionado = agentesNombres[indiceAleatorio];
  const agenteDatos = agentes[agenteSeleccionado];

  // Mostrar el nombre del agente
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Agente recomendado: " + agenteSeleccionado;

  // Mostrar la imagen del agente
  const agenteImagen = document.getElementById("imagenAgente");
  agenteImagen.src = agenteDatos.imagen;
  agenteImagen.alt = agenteSeleccionado;

  // Reproducir el audio del agente
  const agenteAudio = document.getElementById("audioAgente");
  agenteAudio.src = agenteDatos.audio;
  agenteAudio.play();
}