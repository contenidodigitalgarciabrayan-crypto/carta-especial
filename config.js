// ═══════════════════════════════════════════════════════════════════
// OPCIONES DE PERSONALIZACIÓN AVANZADA
// ═══════════════════════════════════════════════════════════════════

// 🎨 TEMAS DE COLOR PREDEFINIDOS
// Descomenta el que quieras usar y recarga la página

const THEMES = {
    // Tema 1: Rosa Elegante (por defecto)
    rose: {
        primary: '#c86496',
        secondary: '#e6b8d7',
        tertiary: '#d99ec6',
        light: '#ffeef5',
        contrast: 'rgba(200, 100, 150, 0.3)',
        flowerColor: '🌸'
    },
    
    // Tema 2: Púrpura Sofisticado
    purple: {
        primary: '#7b3ff2',
        secondary: '#a855f7',
        tertiary: '#9333ea',
        light: '#f3e8ff',
        contrast: 'rgba(123, 63, 242, 0.3)',
        flowerColor: '🌺'
    },
    
    // Tema 3: Azul Romántico
    blue: {
        primary: '#0ea5e9',
        secondary: '#38bdf8',
        tertiary: '#06b6d4',
        light: '#ecf0f1',
        contrast: 'rgba(14, 165, 233, 0.3)',
        flowerColor: '🌼'
    },
    
    // Tema 4: Dorado Elegante
    gold: {
        primary: '#d4af37',
        secondary: '#f0e68c',
        tertiary: '#daa520',
        light: '#fffef0',
        contrast: 'rgba(212, 175, 55, 0.3)',
        flowerColor: '🌻'
    },
    
    // Tema 5: Rojo Apasionado
    red: {
        primary: '#dc2626',
        secondary: '#ef4444',
        tertiary: '#f87171',
        light: '#fee2e2',
        contrast: 'rgba(220, 38, 38, 0.3)',
        flowerColor: '🌷'
    }
};

// ═══════════════════════════════════════════════════════════════════
// CONFIGURACIÓN PERSONALIZABLE
// ═══════════════════════════════════════════════════════════════════

const CONFIG = {
    // Selecciona el tema (rose, purple, blue, gold, red)
    theme: 'rose',
    
    // Velocidad de animaciones (0.5 = más rápido, 1.5 = más lento)
    animationSpeed: 1,
    
    // Número de flores cayendo
    flowerCount: 8,
    
    // Reproducir sonido al abrir
    playSound: true,
    
    // Permitir cambiar foto por clic
    allowPhotoChange: true,
    
    // Duración de la animación de apertura (ms)
    openAnimationDuration: 600,
    
    // Mensaje de bienvenida en consola
    showWelcomeMessage: true
};

// ═══════════════════════════════════════════════════════════════════
// FUNCIÓN PARA APLICAR TEMA PERSONALIZADO
// ═══════════════════════════════════════════════════════════════════

function applyTheme(themeName) {
    const theme = THEMES[themeName] || THEMES.rose;
    const root = document.documentElement;
    
    // Crear estilos dinámicos
    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --primary-color: ${theme.primary};
            --secondary-color: ${theme.secondary};
            --tertiary-color: ${theme.tertiary};
            --light-color: ${theme.light};
            --contrast-color: ${theme.contrast};
        }
        
        .envelope-front h2,
        .envelope-front p,
        .letter-header h1,
        .photo-hint,
        .signature,
        .signature-name {
            color: ${theme.primary} !important;
        }
        
        .envelope-body {
            border-color: ${theme.secondary};
            background: linear-gradient(135deg, ${theme.light} 0%, ${theme.light} 100%);
        }
        
        .flap-top {
            background: linear-gradient(135deg, ${theme.secondary} 0%, ${theme.tertiary} 100%);
            border-color: ${theme.primary};
        }
        
        .letter-inside {
            border-color: ${theme.tertiary};
        }
        
        .close-btn {
            background: linear-gradient(135deg, ${theme.secondary}, ${theme.tertiary});
        }
        
        .close-btn:hover {
            background: linear-gradient(135deg, ${theme.tertiary}, ${theme.primary});
        }
        
        .photo-frame {
            border-color: ${theme.secondary};
        }
        
        .photo-frame:hover {
            border-color: ${theme.primary};
        }
        
        .decorative-line {
            background: linear-gradient(90deg, transparent, ${theme.secondary}, transparent);
        }
    `;
    
    document.head.appendChild(style);
}

// ═══════════════════════════════════════════════════════════════════
// MENSAJE DE BIENVENIDA
// ═══════════════════════════════════════════════════════════════════

if (CONFIG.showWelcomeMessage) {
    console.log(
        '%c✨ CARTA INTERACTIVA ELEGANTE ✨',
        'font-size: 18px; color: #c86496; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);'
    );
    console.log(
        '%cPara personalizar, edita la variable CONFIG al inicio de este archivo.',
        'font-size: 12px; color: #666;'
    );
    console.log('Temas disponibles: rose, purple, blue, gold, red');
}

// ═══════════════════════════════════════════════════════════════════
// APLICAR TEMA AL CARGAR
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    applyTheme(CONFIG.theme);
});

// ═══════════════════════════════════════════════════════════════════
// SHORTCUTS DE TECLADO ADICIONALES
// ═══════════════════════════════════════════════════════════════════

document.addEventListener('keydown', function(e) {
    // Presiona 'T' para cambiar tema (cicla entre temas)
    if (e.key === 't' || e.key === 'T') {
        const themesArray = Object.keys(THEMES);
        const currentIndex = themesArray.indexOf(CONFIG.theme);
        const nextIndex = (currentIndex + 1) % themesArray.length;
        CONFIG.theme = themesArray[nextIndex];
        applyTheme(CONFIG.theme);
        console.log('🎨 Tema cambiado a:', CONFIG.theme);
    }
    
    // Presiona 'R' para recargar la página
    if (e.key === 'r' || e.key === 'R') {
        if (e.ctrlKey || e.metaKey) return; // No interceptar Ctrl+R
        location.reload();
    }
});

// ═══════════════════════════════════════════════════════════════════
// FUNCIÓN PARA OBTENER CONFIGURACIÓN ACTUAL
// ═══════════════════════════════════════════════════════════════════

function getConfig() {
    return CONFIG;
}

function updateConfig(newOptions) {
    Object.assign(CONFIG, newOptions);
    if (newOptions.theme) {
        applyTheme(newOptions.theme);
    }
    console.log('✨ Configuración actualizada:', CONFIG);
}

// Exposer funciones en consola para acceso fácil
window.CardConfig = {
    getConfig,
    updateConfig,
    THEMES
};

console.log('Usa window.CardConfig para acceder a las funciones de configuración');
console.log('Ejemplo: window.CardConfig.updateConfig({theme: "purple"})');
