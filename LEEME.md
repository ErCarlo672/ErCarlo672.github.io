# carlos.dev · Web personal

Web estática (HTML + CSS + JS, sin dependencias ni build). Sube la carpeta tal cual a Hostinger, Netlify, Vercel o GitHub Pages.

## Qué tienes que cambiar (busca `EDITAR` en los archivos)

Email, GitHub, LinkedIn e Instagram ya son los reales. Queda pendiente:

| Dónde | Qué |
|---|---|
| `index.html` → `<head>` | Cuando tengas dominio, añade `<link rel="canonical">` y `og:image` con la URL completa |
| `privacidad.html` | Tus datos fiscales si facturas como autónomo |
| `assets/og.png` | Imagen de 1200×630 para cuando compartan tu web (aún no existe) |

Textos en inglés: diccionario `EN` al principio de `main.js`. El español se lee directamente del HTML.

## Formulario

Ahora abre el cliente de correo del visitante con el mensaje preparado. Para recibirlo directamente, crea un formulario gratis en formspree.io y cambia el `submit` de `initContact()` en `main.js`.

## Al volver a publicar

Cambia `?v=20261016` por la fecha del día en `index.html` para que nadie vea la versión antigua en caché.
