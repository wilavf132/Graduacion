
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
    william_flores: "William Flores y Familia",
    carmen_flores: "Carmen Flores y Mirna Flores",
    sofia_vasquez: "Sofía Vásquez y Familia",
    ingrid_vasquez: "Ingrid Vásquez y Familia",
    wendy_vasquez: "Wendy Vásquez y Familia",
    milagro_vasquez: "Milagro Vásquez y Familia",
    petrona_vasquez: "Petrona Vásquez y Familia",
    alexander_veliz: "Alexander Véliz y Familia",
    taciano_vasquez: "Taciano Vásquez y Familia",
    reina_vasquez: "Reina Vásquez y Familia",
    salomon_vasquez: "Salomón Vásquez y Familia",
    jaime_perez: "Jaime Pérez y Familia",
    angelina_veliz: "Angelina Véliz y Familia",
    alexander_martinez: "Alexander Martínez y Familia",
    genesis_diaz: "Génesis Díaz y Familia",
    gerardo_lopez: "Gerardo López y Familia",
    andres_vasquez: "Andrés Vásquez y Familia",
    jesse_miranda: "Jesse Miranda y Familia",
    angelica_perez: "Angélica Pérez y Familia",
    denis_carranza: "Denis Carranza y Familia",
    eva_perez: "Eva Pérez y Familia",
    miguel_henriquez: "Miguel Henríquez y Familia",
    antonio_aranda: "Antonio Aranda y Familia",
    ruben_mulato: "Rubén Mulato y Familia",
    stephanny_ruiz: "Stephanny Ruiz y Familia",
    luis_barrero: "Luis Barrero y Familia",
    ernesto_lovo: "Ernesto Lovo y Familia",
    luis_flores: "Luis Flores y Familia",
   mario_flores: "Mario Flores",
cristian_flores: "Cristian Flores y familia",
   waldir_rosa: "Waldir Rosa",
   denis_martel: "Denis Martel"
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
