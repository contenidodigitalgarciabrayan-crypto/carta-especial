// Variables principales
const envelope = document.getElementById('envelope');
const letterInside = document.getElementById('letterInside');
const closeBtn = document.getElementById('closeBtn');

// Abrir carta
if (envelope) {
    envelope.addEventListener('click', function(e) {
        e.stopPropagation();
        if (letterInside) {
            letterInside.classList.add('open');
        }
    });
}

// Cerrar carta
if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (letterInside) {
            letterInside.classList.remove('open');
        }
    });
}

// Cerrar si se hace clic fuera
document.addEventListener('click', function(e) {
    if (letterInside && letterInside.classList.contains('open')) {
        if (!letterInside.contains(e.target) && !envelope.contains(e.target)) {
            letterInside.classList.remove('open');
        }
    }
});

// Cerrar con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && letterInside && letterInside.classList.contains('open')) {
        letterInside.classList.remove('open');
    }
});

console.log('✨ Carta lista para usar ✨');
