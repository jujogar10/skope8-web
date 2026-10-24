# skope8 — sitio web

Sitio estático (HTML, CSS y JS, sin build) para GitHub Pages.

## Estructura

| Archivo | Qué es |
|---|---|
| `index.html` | Página principal: portada, problema, los ocho problemas, la escalera, antes y después, por qué yo, cierre |
| `sobre-juan.html` | Versión extendida de "Por qué yo" |
| `contacto.html` | WhatsApp y correo para la conversación de 30 minutos |
| `404.html` | Página de error de GitHub Pages |
| `assets/css/styles.css` | Colores y tipografía de la guía de marca (variables en `:root`) |
| `assets/js/main.js` | **Datos de contacto**, menú móvil y animaciones |
| `assets/img/logo/` | Logos recortados de la hoja de marca (PNG) |

## Antes de publicar

1. **Contacto:** edita `CONTACT` al inicio de `assets/js/main.js` (número de WhatsApp con indicativo, sin `+`, y correo). Todos los botones del sitio toman esos datos.
2. **Logos:** los PNG se recortaron de `Guía de identidad visual SKOPE8.png`. Cuando tengas los SVG originales, reemplázalos en `assets/img/logo/` y actualiza las rutas en los HTML.
3. **Sobre Juan:** hay comentarios `TODO` para ampliar la historia y poner una foto real.

## Ver en local

```bash
python -m http.server 8080
```

y abre http://localhost:8080.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `skope8-web`).
2. Sube el código:
   ```bash
   git remote add origin https://github.com/<usuario>/skope8-web.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, rama `main`, carpeta `/ (root)`.
4. Para usar un dominio propio (por ejemplo `skope8.com`), agrégalo en esa misma pantalla y crea el registro DNS que indica GitHub.

Los documentos de trabajo (storytelling, guía de marca y la hoja de identidad en PNG) están en `.gitignore` para que no queden publicados en el sitio.
