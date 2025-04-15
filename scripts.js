// Imágenes de fondo para cada facción
const backgrounds = {
    imperium:   "imagen/fondos_imagen/imperio.jpg", // Emperador de la Humanidad
    chaos:      "imagen/fondos_imagen/caos.jpg",    // Dioses del Caos
    orks:       "imagen/fondos_imagen/orkos_2.jpg",     // Orkos
    eldar:      "imagen/fondos_imagen/eldar.jpg",    // Eldar
    necrons:    "imagen/fondos_imagen/necrones_2.jpg",   // Necrones
    tau:        "imagen/fondos_imagen/tau.jpg",       // Tau
    tyranids:   "imagen/fondos_imagen/tyranidos_2.jpg",  // Tiránidos
    mechanicus: "imagen/fondos_imagen/mechanicuss.jpg" // Mechanicus
};

// Colores de borde para cada facción
const borderColors = {
    imperium: '#D4AF37', // Dorado Imperial
    chaos: '#9C0000',    // Rojo Caótico
    orks: '#AA5500',     // Naranja Orko
    eldar: '#FF55FF',    // Rosa Eldar
    necrons: '#00AA00',  // Verde Necrón
    tau: '#FF9933',      // Naranja Tau
    tyranids: '#AA00AA', // Púrpura Tiránido
    mechanicus: '#D4AF37' // Dorado Mechanicus
};

// Función para cambiar el fondo
function changeBackground(faction) {
    const body = document.getElementById('body');
    const flyer = document.querySelector('.flyer-container');
    
    // Cambiar la imagen de fondo
    body.style.backgroundImage = `url('${backgrounds[faction]}')`;
    
    // Cambiar color del borde del flyer
    flyer.style.borderColor = borderColors[faction];
    
    // Resaltar la facción seleccionada
    document.querySelectorAll('.faction').forEach(btn => {
        btn.style.transform = '';
        btn.style.boxShadow = '';
    });
    event.currentTarget.style.transform = 'scale(1.15)';
    event.currentTarget.style.boxShadow = `0 0 15px ${borderColors[faction]}`;
}

// Inicializar con fondo del Imperio
document.addEventListener('DOMContentLoaded', function() {
    changeBackground('imperium');
    document.querySelector('.faction.imperium').style.transform = 'scale(1.15)';
    document.querySelector('.faction.imperium').style.boxShadow = '0 0 15px #D4AF37';
});