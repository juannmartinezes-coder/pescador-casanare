// Valores base compartidos (equipo, no cambian por isla)
const DIFICULTAD = {
  pesoMaximoMochila: 100
};

const MUTACIONES_WIP = [{
  id: "normal",
  nombre: "Normal",
  prob: .65,
  mult: 1,
  color: "#b0bec5"
}, {
  id: "grande",
  nombre: "Grandote",
  prob: .18,
  mult: 1.6,
  color: "#4caf50"
}, {
  id: "brillante",
  nombre: "Brillante",
  prob: .10,
  mult: 2.2,
  color: "#ffd54f"
}, {
  id: "albino",
  nombre: "Albino",
  prob: .05,
  mult: 3,
  color: "#eceff1"
}, {
  id: "legendario",
  nombre: "★ Legendario",
  prob: .02,
  mult: 5,
  color: "#ffb300"
}, ];

// Cada isla representa un cuerpo de agua real del departamento de Casanare
// (Llanos Orientales, Colombia). La dificultad sube isla a isla: los peces
// nadan más rápido y erráticos, la paciencia se agota antes, fallar cuesta
// más caro y el viaje da menos tiempo.
// Todos los peces usan "img" apuntando a fotos/<archivo>.png -- agrega esas
// imágenes en la carpeta fotos/ con esos mismos nombres exactos.
// Por defecto se asume que la foto del pez mira hacia la IZQUIERDA (así están
// las 4 que ya existen). Si alguna foto tuya mira hacia la derecha, agrégale
// la propiedad  mirar: "derecha"  a ese pez y el juego la voltea correctamente
// según hacia dónde esté nadando en cada momento.
const DATA_ISLAS = [{
  id: 1,
  nombre: "Ciénaga del Tinije",
  desc: true,
  costo: 0,
  fondo: "#1a6b8a",
  multVenta: 1,
  dificultad: {
    multiplicadorVelocidad: 1.0,
    erratico: 0.35,
    tickPaciencia: 1600,
    decaimientoPaciencia: 1.5,
    penalizacionFallo: 6,
    bonusAtrapar: 4,
    tiempoLimiteViaje: 90
  },
  peces: [{
    n: "Bota Vieja",
    img: "fotos/botarota.png",
    valor: 2,
    vel: 1,
    tam: 28,
    peso: 1,
    color: "#8d6e63",
    prob: .38
  }, {
    n: "Bocachico",
    img: "fotos/pescadonormal.png",
    valor: 9,
    vel: 2.2,
    tam: 26,
    peso: 2,
    color: "#64b5f6",
    prob: .34
  }, {
    n: "Caribe",
    img: "fotos/pezquedamiedo.png",
    valor: 20,
    vel: 3.2,
    tam: 30,
    peso: 3,
    color: "#ef5350",
    prob: .21
  }, {
    n: "Bagre Valentón",
    img: "fotos/tiburonballena.png",
    valor: 50,
    vel: 1.1,
    tam: 48,
    peso: 12,
    color: "#5c6bc0",
    prob: .07
  }, ]
}, {
  id: 2,
  nombre: "Río Cravo Sur",
  desc: false,
  costo: 180,
  fondo: "#0d4f6e",
  multVenta: .97,
  dificultad: {
    multiplicadorVelocidad: 1.25,
    erratico: 0.46,
    tickPaciencia: 1500,
    decaimientoPaciencia: 1.9,
    penalizacionFallo: 7,
    bonusAtrapar: 3.5,
    tiempoLimiteViaje: 80
  },
  peces: [{
    n: "Mojarra Amarilla",
    img: "fotos/mojarra_amarilla.png",
    mirar: "derecha",
    valor: 12,
    vel: 3,
    tam: 20,
    peso: 1.5,
    color: "#6ab04c",
    prob: .34
  }, {
    n: "Yamú",
    img: "fotos/yamu.png",
    mirar: "derecha",
    valor: 22,
    vel: 4,
    tam: 30,
    peso: 3,
    color: "#22a6b3",
    prob: .29
  }, {
    n: "Curito",
    img: "fotos/curito.png",
    mirar: "derecha",
    valor: 35,
    vel: 1.4,
    tam: 34,
    peso: 4,
    color: "#78e08f",
    prob: .20
  }, {
    n: "Blanquillo",
    img: "fotos/blanquillo.png",
    valor: 60,
    vel: 2.4,
    tam: 40,
    peso: 7,
    color: "#535c68",
    prob: .12
  }, {
    n: "Nicuro",
    img: "fotos/nicuro.png",
    valor: 90,
    vel: 1.8,
    tam: 34,
    peso: 5,
    color: "#8e44ad",
    prob: .05
  }, ]
}, {
  id: 3,
  nombre: "Río Pauto",
  desc: false,
  costo: 480,
  fondo: "#0a1a2e",
  multVenta: .93,
  dificultad: {
    multiplicadorVelocidad: 1.55,
    erratico: 0.57,
    tickPaciencia: 1400,
    decaimientoPaciencia: 2.3,
    penalizacionFallo: 8,
    bonusAtrapar: 3,
    tiempoLimiteViaje: 72
  },
  peces: [{
    n: "Sardinata",
    img: "fotos/sardinata.png",
    mirar: "derecha",
    valor: 22,
    vel: 3.4,
    tam: 22,
    peso: 1.5,
    color: "#fdcb6e",
    prob: .30
  }, {
    n: "Picuda",
    img: "fotos/picuda.png",
    mirar: "derecha",
    valor: 40,
    vel: 4.4,
    tam: 34,
    peso: 4,
    color: "#74b9ff",
    prob: .27
  }, {
    n: "Cachama Negra",
    img: "fotos/cachama_negra.png",
    valor: 60,
    vel: 1.6,
    tam: 32,
    peso: 5,
    color: "#fd79a8",
    prob: .22
  }, {
    n: "Bagre Amarillo",
    img: "fotos/bagre_amarillo.png",
    valor: 105,
    vel: 3.2,
    tam: 44,
    peso: 13,
    color: "#636e72",
    prob: .14
  }, {
    n: "Dorado del Pauto",
    img: "fotos/dorado_pauto.png",
    mirar: "derecha",
    valor: 170,
    vel: 5.2,
    tam: 46,
    peso: 16,
    color: "#a29bfe",
    prob: .07
  }, ]
}, {
  id: 4,
  nombre: "Río Meta",
  desc: false,
  costo: 1100,
  fondo: "#1c0a00",
  multVenta: .89,
  dificultad: {
    multiplicadorVelocidad: 1.85,
    erratico: 0.68,
    tickPaciencia: 1300,
    decaimientoPaciencia: 2.7,
    penalizacionFallo: 9,
    bonusAtrapar: 2.5,
    tiempoLimiteViaje: 65
  },
  peces: [{
    n: "Raya de Río",
    img: "fotos/raya_rio.png",
    valor: 38,
    vel: 3.2,
    tam: 38,
    peso: 5,
    color: "#2d3436",
    prob: .29
  }, {
    n: "Bagre Bocón",
    img: "fotos/bagre_bocon.png",
    valor: 60,
    vel: 2.1,
    tam: 30,
    peso: 4,
    color: "#e17055",
    prob: .26
  }, {
    n: "Tucunaré",
    img: "fotos/tucunare.png",
    valor: 110,
    vel: 3.4,
    tam: 42,
    peso: 10,
    color: "#00b894",
    prob: .24
  }, {
    n: "Dorado del Meta",
    img: "fotos/dorado_meta.png",
    valor: 190,
    vel: 1.7,
    tam: 36,
    peso: 7,
    color: "#ffeaa7",
    prob: .14
  }, {
    n: "Valentón Gigante",
    img: "fotos/valenton_gigante.png",
    valor: 340,
    vel: 1.1,
    tam: 60,
    peso: 26,
    color: "#6c5ce7",
    prob: .07
  }, ]
}, {
  id: 5,
  nombre: "Bocas del Casanare",
  desc: false,
  costo: 2400,
  fondo: "#050c14",
  multVenta: .85,
  dificultad: {
    multiplicadorVelocidad: 2.15,
    erratico: 0.8,
    tickPaciencia: 1200,
    decaimientoPaciencia: 3.2,
    penalizacionFallo: 11,
    bonusAtrapar: 2,
    tiempoLimiteViaje: 58
  },
  peces: [{
    n: "Sábalo",
    img: "fotos/sabalo.png",
    valor: 55,
    vel: 3.6,
    tam: 26,
    peso: 3,
    color: "#81ecec",
    prob: .30
  }, {
    n: "Bagre Piraíba",
    img: "fotos/bagre_piraiba.png",
    valor: 130,
    vel: 2.6,
    tam: 46,
    peso: 15,
    color: "#4b4b6a",
    prob: .27
  }, {
    n: "Raya Guacamaya",
    img: "fotos/raya_guacamaya.png",
    valor: 210,
    vel: 2,
    tam: 40,
    peso: 9,
    color: "#e84393",
    prob: .22
  }, {
    n: "Payara Gigante",
    img: "fotos/payara_gigante.png",
    valor: 340,
    vel: 5.6,
    tam: 44,
    peso: 12,
    color: "#dfe6e9",
    prob: .14
  }, {
    n: "Pirarucú",
    img: "fotos/pirarucu.png",
    valor: 620,
    vel: 1,
    tam: 70,
    peso: 32,
    color: "#0984e3",
    prob: .07
  }, ]
}];
