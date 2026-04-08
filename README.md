# 💌 Carta Interactiva Elegante 💌

Una hermosa carta digital interactiva con animaciones profesionales, diseñada especialmente para impresionar.

## ✨ Características

- 🎁 **Carta interactiva** que se abre con un clic elegante
- 🌸 **Flores animadas** cayendo continuamente en el fondo
- 📸 **Sección de foto** personalizable - carga tu propia imagen
- 💝 **Mensaje personalizado** con diseño elegante
- ✨ **Animaciones suaves** en todos los elementos
- 🎨 **Diseño profesional** con colores femeninos y sofisticados
- 📱 **Totalmente responsivo** - funciona en todos los dispositivos
- 🔊 **Sonido suave** al abrir la carta (Web Audio API)

## 📁 Estructura de Archivos

```
CARTA PARA UNA MIGAJERA/
├── index.html              # Archivo principal HTML
├── css.style/
│   └── style.css          # Estilos y animaciones CSS
├── Jss/
│   └── script.js          # Lógica interactiva JavaScript
└── img/
    └── placeholder.svg    # Imagen placeholder de muestra
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Abre el archivo `index.html` en tu navegador
2. ¡La carta está lista para usar!

### Opción 2: Con un servidor local
```bash
# Si tienes Python 3
python -m http.server 8000

# Si tienes Python 2
python -m SimpleHTTPServer 8000

# O con Node.js (si tienes http-server instalado)
npx http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## 🎨 Personalización

### Cambiar el Mensaje
Edita el texto en `index.html` en la sección `.message-text`:

```html
<p class="message-text">
    Tu mensaje personalizado aquí...
</p>
```

### Cambiar la Firma
Modifica el nombre en:

```html
<p class="signature-name">Tu Nombre Aquí</p>
```

### Agregar tu Foto
1. Haz clic en la imagen placeholder de la carta abierta
2. Selecciona tu foto desde tu dispositivo
3. ¡Se guardará en la sesión!

### Personalizar Colores
Edita las variables de color en `css.style/style.css`:
- `#c86496` - Color principal (rosa oscuro)
- `#e6b8d7` - Color secundario (rosa claro)
- `#d99ec6` - Color terciario (rosa medio)

### Cambiar las Flores
Modifica los emojis en `index.html` en la sección `flowers-container`:

```html
<div class="flower flower-1">🌸</div>  <!-- Cambiar imagen -->
```

Opciones de flores: 🌸 🌺 🌼 🌻 🌷 💐 🥀

## 🎭 Interacciones

- **Clic en el sobre**: Abre la carta con animación suave
- **Clic en la foto**: Abre selector de archivo para cambiar imagen
- **Botón ✕**: Cierra la carta y vuelve al sobre
- **ESC**: Atajo para cerrar la carta
- **Clic fuera**: También cierra la carta

## 🌟 Efectos Especiales

- Flores cayendo con rotación suave
- Sobre flotante con efecto pulse
- Partículas al abrir la carta
- Animaciones de fade-in para contenido
- Flores saltando en la firma
- Efecto brillo en el nombre

## 📱 Responsivo

La carta se adapta automáticamente a:
- 💻 Computadoras (escritorio)
- 📱 Tablets
- 📲 Teléfonos móviles

## 🎼 Compatibilidad

- ✅ Chrome / Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ IE11 (animaciones básicas solamente)

## 💡 Tips

1. **Para mejor experiencia**: Usa un navegador moderno resiente (Chrome, Edge, Firefox)
2. **Foto de perfil**: Usa una foto de buena calidad en formato cuadrado (JPG, PNG)
3. **Sonido**: El audio se reproducirá automáticamente (silenciado en navegadores sin permiso)
4. **Mensaje largo**: La carta tiene scroll si el contenido es muy extenso

## 🛠️ Troubleshooting

**Las flores no aparecen**
- Espera unos segundos, comienzan a caer poco después de cargar

**La foto no se carga**
- Verifica que el archivo esté en la carpeta `img/`
- Usa formatos comunes: JPG, PNG, GIF, WebP

**Las animaciones están lentas**
- Cierra otras pestañas/aplicaciones
- Actualiza la página
- Prueba con otro navegador

**El sonido no funciona**
- Es normal en algunos navegadores (privacidad del usuario)
- El sitio funciona perfectamente sin sonido

## 🎁 Ideas de Uso

- 💝 Regalo especial para alguien importante
- 💌 Invitación elegante para evento
- 🎂 Felicitación de cumpleaños interactiva
- 👰 Tarjeta de boda digital
- 💑 Aniversario especial
- 🎓 Felicitación de graduación

## 📝 Notas

- El contenido se puede personalizar completamente editando el HTML
- Las imágenes se cargan en la sesión (no se guardan permanentemente)
- Funciona completamente offline una vez cargado

---

✨ **¡Que disfrutes tu carta especial!** ✨
