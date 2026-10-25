
/* ==========================================
   1. DATOS DE LA GRADUACIÓN
   ========================================== */

const EVENTO = {
    fechaTexto: "Sábado 31 de Octubre de 2026",
    hora: "4:00 p. m.",
    lugar: "Restaurante Finca La Colina",
    mapa: "https://maps.app.goo.gl/Qbo82f3sDgaeQfu8A"
};


/* ==========================================
   2. LISTA DE INVITADOS
   Cada código corresponde a una persona.
   ========================================== */

const INVITADOS = {
    william_flores: "William Flores y familia",
    carmen_flores: "Carmen Flores y familia",
    sofia_vasquez: "Sofía Vásquez y familia",
    indrig_vasquez: "Indrig Vásquez y familia",
    wendy_vasquez: "Wendy Vásquez y familia",
    milagro_vasquez: "Milagro Vásquez y familia",
    petrona_vasquez: "Petrona Vásquez y familia",
    alexander_veliz: "Alexander Véliz y familia",
    taciano_vasquez: "Taciano Vásquez y familia",
    reina_vasquez: "Reina Vásquez y familia",
    salomon_vasquez: "Salomón Vásquez y familia",
    jaime_perez: "Jaime Pérez y familia",
    angelina_veliz: "Angelina Véliz y familia",
    alexander_martinez: "Alexander Martínez y familia",
    genesis_diaz: "Génesis Díaz y familia",
    gerardo_lopez: "Gerardo López y familia",
    andres_vasquez: "Andrés Vásquez y familia",
    jesse_miranda: "Jesse Miranda y familia",
    angelica_perez: "Angélica Pérez y familia",
    denis_carranza: "Denis Carranza y familia",
    eva_perez: "Eva Pérez y familia",
    miguel_henriquez: "Miguel Henríquez",
    antonio_aranda: "Antonio Aranda",
    ruben_mulato: "Rubén Mulato",
    stephanny_ruiz: "Stephanny Ruiz y familia",
    luis_barrero: "Luis Barrero y familia",
    ernesto_lovo: "Ernesto Lovo y familia",
    luis_flores: "Luis Flores"
};


/* ==========================================
   3. PERSONALIZAR EL NOMBRE DEL INVITADO
   Lee el código que viene en el enlace.
   ========================================== */

const parametros = new URLSearchParams(window.location.search);
const codigo = parametros.get("id");
const nombre = codigo ? INVITADOS[codigo] : null;

const seccionDestinatario = document.getElementById(
    "seccionDestinatario"
);

const elementoNombre = document.getElementById("nombreInvitado");

if (seccionDestinatario && elementoNombre) {
    if (nombre) {
        elementoNombre.textContent = nombre;
        seccionDestinatario.hidden = false;
    } else {
        elementoNombre.textContent = "";
        seccionDestinatario.hidden = true;
    }
}


/* ==========================================
   4. MOSTRAR LOS DATOS DEL EVENTO
   ========================================== */

const elementoFecha = document.getElementById("fechaEvento");
const elementoHora = document.getElementById("horaEvento");
const elementoLugar = document.getElementById("lugarEvento");
const botonMapa = document.getElementById("botonMapa");

if (elementoFecha) {
    elementoFecha.textContent = EVENTO.fechaTexto;
}

if (elementoHora) {
    elementoHora.textContent = EVENTO.hora;
}

if (elementoLugar) {
    elementoLugar.textContent = EVENTO.lugar;
}

if (botonMapa) {
    botonMapa.href = EVENTO.mapa;
}
