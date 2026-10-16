# carlos.dev · Web personal

Web estática (HTML + CSS + JS, sin dependencias ni build).

Publicada en **https://ercarlo672.github.io** con GitHub Pages: cada `git push` a `main` la actualiza en un minuto.

## Qué tienes que cambiar (busca `EDITAR` en los archivos)

Email, redes, URL canónica e imagen para compartir ya están configurados. Queda pendiente:

| Dónde | Qué |
|---|---|
| `index.html` → `<head>` | Si compras un dominio propio, cambia `ercarlo672.github.io` por él (canonical, og y twitter) |
| `privacidad.html` | Tus datos fiscales si facturas como autónomo |

Textos en inglés: diccionario `EN` al principio de `main.js`. El español se lee directamente del HTML.

## Formulario

Ahora abre el cliente de correo del visitante con el mensaje preparado. Para recibirlo directamente, crea un formulario gratis en formspree.io y cambia el `submit` de `initContact()` en `main.js`.

## Al volver a publicar

Cambia `?v=20261016` por la fecha del día en `index.html` para que nadie vea la versión antigua en caché.
