// Variables Globales
const piñata = document.getElementById('piñata');
const hitsDisplay = document.getElementById('hits');
const celebration = document.getElementById('celebration');
const batAnimation = document.getElementById('bat-animation');

let hits = 0;
const maxHits = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // Número aleatorio entre 5 y 10

// Mostrar los golpes necesarios en la consola
console.log(`Número de golpes necesarios para romper la piñata: ${maxHits}`);

// Evento de clic en la piñata
piñata.addEventListener('click', (event) => {
    hits++;
    hitsDisplay.textContent = `Sigue golpeando: ${hits}`;
    
    // Efecto de movimiento de la piñata al recibir un golpe
    piñata.style.transition = 'transform 0.2s ease-in-out';
    piñata.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(${Math.random() * 15 - 7.5}deg)`;

    // Animación de golpe con el bate
    animateBat(event.clientX, event.clientY);

    // Verificar si se alcanzaron los golpes necesarios
    if (hits >= maxHits) {
        romperPiñata();
    }
});

// Función para animar el bate con un golpe directo
function animateBat(targetX, targetY) {
    batAnimation.style.display = 'block';
    batAnimation.style.position = 'absolute';
    batAnimation.style.left = `${window.innerWidth / 2}px`; // Posición inicial del bate
    batAnimation.style.top = `${window.innerHeight}px`; // Fuera de la pantalla
    batAnimation.style.transform = 'rotate(-45deg)';

    // Iniciar animación hacia la piñata
    batAnimation.style.transition = 'all 0.3s ease-in-out';
    batAnimation.style.left = `${targetX - 50}px`;
    batAnimation.style.top = `${targetY - 50}px`;

    // Golpe final con un pequeño rebote
    setTimeout(() => {
        batAnimation.style.transform = 'rotate(-15deg) scale(1.1)';
    }, 200);

    // Regresar el bate después del golpe
    setTimeout(() => {
        batAnimation.style.transition = 'all 0.3s ease-in-out';
        batAnimation.style.left = `${window.innerWidth / 2}px`;
        batAnimation.style.top = `${window.innerHeight}px`;
        batAnimation.style.transform = 'rotate(-45deg)';
        batAnimation.style.display = 'none';
    }, 500);
}

// Función para romper la piñata
function romperPiñata() {
    piñata.style.display = 'none';
    hitsDisplay.style.display = 'none';
    celebration.style.display = 'block';
    lanzarFuegosArtificiales();
}

// Función de fuegos artificiales
function lanzarFuegosArtificiales() {
    document.body.style.background = 'black';
    celebration.innerHTML += `<p style="font-size: 2rem; text-align: center;">🎇 ¡Que este Nuevo Año sea de Abundancia y Properidad! 🎆</p>`;
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 2000);
    }
}
