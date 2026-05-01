# Propuesta de mejora — Portafolio Javier Bravo

> Objetivo: **mantener la esencia** (vibe Dragon Ball + ramen, paleta crema cálida, animación del aura de Goku, tipografía sobria, sensación de portafolio personal y artesanal) y **optimizar** legibilidad, ritmo visual, responsive y la calidad del aura.

---

## 1. Diagnóstico rápido

Lo que **funciona bien** y hay que conservar:

- Fondo crema (`#ffefe5`) cálido y poco común — diferenciador.
- Sidebar de íconos del stack como "constelación" en la esquina derecha.
- Goku con aura animada en el footer + el "Sleep, code, eat…" como firma.
- El ramen como elemento decorativo recurrente.
- Tipografía vertical (`A B O U T  M E`) — un guiño retro muy personal.

Lo que **lastra la experiencia** hoy:

| Área | Problema actual | Impacto |
|---|---|---|
| Tipografía | `Inter` está cargado pero nunca aplicado; todo cae a `Arial` genérico | Look "borrador" |
| Copys | Errores tipográficos (`conderhouse`, `teached`, `metodology`, `5pxx`), inicios en minúscula, frases cortadas con `<br />` | Resta credibilidad |
| Layout | `transform: translateX(70%) translateY(80%)` para posicionar texto | Frágil, rompe en pantallas medianas |
| Aura de Goku | 4 keyframes, sólo `drop-shadow` hacia arriba (`0 -20px`), colores opacos | Se ve plana, no "irradia" |
| Responsive | Componentes duplicados desktop/mobile con copys repetidos | Doble mantenimiento |
| Metadata | `title: "Create Next App"` por defecto | SEO / pestaña |
| Header | Bloque gris plano `bg-gray-700` | No conversa con la paleta crema |

---

## 2. Sistema visual propuesto

### 2.1 Paleta (manteniendo el crema como base)

```
--paper:        #ffefe5   /* fondo actual, se queda */
--paper-deep:   #f5dfd0   /* segunda capa para tarjetas */
--ink:          #1f1b18   /* texto principal, cálido en lugar de negro puro */
--ink-soft:     #4a423d
--accent:       #c8421f   /* rojo-ramen, ya insinuado en el shadow del bowl */
--accent-warm:  #ffa53e   /* naranja del aura */
--gold:         #d4a017   /* dorado SS, reemplaza el goldenrod del border */
--line:         #2a2522   /* bordes sutiles */
```

Regla: **un solo accent por vista**. El rojo-ramen domina Home, el dorado domina Latest, el ink-soft domina Contact.

### 2.2 Tipografía

- **Display / títulos**: `Space Grotesk` o `Bricolage Grotesque` (mantiene el aire geométrico, más carácter que Arial).
- **Cuerpo**: `Inter` (ya está importado en `layout.tsx`, sólo falta aplicarlo al `body`).
- **Mono / detalles**: `JetBrains Mono` para timestamps, código y el footer "Sleep, code, eat…".

Aplicar la fuente cargada:

```tsx
// layout.tsx
<body className={inter.className}>
```

### 2.3 Espaciado y ritmo

- Reemplazar `transform: translateX(70%) translateY(80%)` por un grid simple: títulos a la izquierda, contenido en una columna centrada con `max-width: 60ch`.
- `gap` en lugar de `<br />` apilados en los párrafos.

---

## 3. Mejoras por sección

### 3.1 Header / Nav

Hoy: `bg-gray-700` con borde groove.

Propuesta:

- Fondo `--paper-deep`, texto `--ink`, una línea fina inferior `1px solid --line`.
- `h1` con la fuente display, peso 600.
- Subtítulo `Front-end Developer` en `--ink-soft`, mayúsculas tracked (`tracking-[0.3em] uppercase text-xs`).
- Nav sin guiones manuales `Home -`, usar `gap-6` y un punto separador `·` o nada.
- Indicador de ruta activa (subrayado en `--accent`).

### 3.2 Home (About)

**Texto actual** (`about.tsx`) — corregido y más afilado, **misma esencia**:

```
I'm a 34-year-old developer from Chile. I started coding in 2020:
HTML, CSS and JavaScript at Coderhouse, then a bootcamp covering
React, Express, PostgreSQL, testing, Docker and CI/CD. I picked up
Rust on my own through the book and the docs, and finally moved
into the T3 stack — Next.js, Prisma and tRPC — mentored by a
15-year veteran. I'm comfortable working under SCRUM.

Off-screen: yoga + slackline, Dota 2, didgeridoo player.
```

Cambios clave: corrige `conderhouse → Coderhouse`, `teached → mentored`, `metodology → SCRUM`, elimina `<br />` manuales, agrupa el "off-screen" en una sola línea con personalidad.

**Layout**: en vez del `translateX(70%) translateY(70%)`, una columna centrada con `max-w-[55ch]` debajo del título horizontal.

### 3.3 Stack icons

- Mantener el círculo de íconos, pero en `position: sticky` lateral en desktop en lugar de `absolute`.
- Subtítulo "click on the icon to see description" en `--ink-soft`, sin la jerarquía `h3` (es helper text).
- Hover: pasar de `scale(1.035)` a `scale(1.05)` + leve `drop-shadow(0 4px 12px rgba(0,0,0,0.08))`.
- Active state: borde `--accent` en el ícono seleccionado para que se entienda qué descripción se está mostrando.

### 3.4 Latest

- Quitar `transform: translateX(50%) translateY(70%)` y centrar con grid de 2 columnas (logo / texto).
- El `box-shadow` violeta del `.latest-img` (`rgb(233, 211, 255)`) choca con el dorado y el crema. Cambiar a un halo sutil en `--gold`:
  ```css
  box-shadow: 0 0 30px 2px rgba(212, 160, 23, 0.35);
  border: 2px solid var(--gold);
  ```
- El `transform: scaleX(1.7)` deforma el logo redondo del pingüino — quitarlo.
- Bug: `.ramen-latest` tiene `filter: drop-shadow(0px 0px 0px 5pxx orange);` (typo `5pxx`) y luego se sobrescribe. Borrar la primera línea.

### 3.5 Contact

- Hoy son cuatro filas duplicadas (desktop + mobile). Unificar en un solo bloque `flex-col gap-3` con `md:` para layout, una sola fuente.
- Bug: `<Link href="/https://www.linkedin.com/...">` tiene una `/` extra al inicio que rompe el enlace.
- Íconos a 32 px (no 50) y alineados verticalmente con el texto.

### 3.6 Footer (Goku)

Mantener la frase **"Sleep, code, eat…"** y la posición de Goku — sólo refinar:

- Quitar `transform: translateY(-250%)` y `z-index: -1`. Hace que el footer flote raro y se solape.
- Usar margen normal y dejar que Goku quede anclado en la esquina derecha del footer.

---

## 4. Aura de Goku — rediseño

### 4.1 Análisis del aura actual

```css
@keyframes auraAnimation {
  0%   { filter: drop-shadow(0 -20px 20px #ec6205); }
  50%  { filter: drop-shadow(0 -20px 30px #ffa53e); }
  75%  { filter: drop-shadow(0 -20px 20px #ff3e3e)
                drop-shadow(0 -20px 30px #aa5006); }
  100% { filter: drop-shadow(0 -20px 30px #e92c13); }
}
```

Problemas:
1. **Sólo va hacia arriba** (`0 -20px`). Una llama / aura SS irradia en todas direcciones.
2. Sólo 1–2 capas de shadow → se ve "pintada", no "encendida".
3. La paleta es rojo-naranja sólido. El SS canónico mezcla **dorado + amarillo cálido + tinte rojo en los picos**.
4. La curva 0/50/75/100 es asimétrica y produce un parpadeo poco natural.

### 4.2 Propuesta — aura "Super Saiyan respirando"

Tres capas apiladas: **núcleo dorado** (cerca del cuerpo) + **halo cálido** (medio) + **lengüetazos rojos** (pico, ocasionales). Animación lenta que respira y un segundo loop más rápido para el flicker.

```css
@keyframes auraBreathe {
  0%, 100% {
    filter:
      drop-shadow(0  0  6px  #ffd24a)         /* núcleo dorado */
      drop-shadow(0 -4px 18px #ffa53e)         /* halo cálido */
      drop-shadow(0 -2px 32px rgba(255,165,62,0.55));
  }
  50% {
    filter:
      drop-shadow(0  0  10px #ffe27a)
      drop-shadow(0 -6px 26px #ffb84d)
      drop-shadow(0 -4px 44px rgba(255,140,40,0.6));
  }
}

@keyframes auraFlicker {
  0%, 92%, 100% { transform: translateY(0) scaleY(1); }
  94%           { transform: translateY(-1px) scaleY(1.02); }    /* lengua de fuego corta */
  96%           { transform: translateY(-2px) scaleY(1.04); }
  98%           { transform: translateY(-1px) scaleY(1.015); }
}

.goku {
  animation:
    auraBreathe 3.2s ease-in-out infinite,
    auraFlicker 5s   ease-in-out infinite;
  will-change: filter, transform;
}

/* Picos rojos ocasionales (cada ~12s) sin romper el breathe */
@keyframes auraSpike {
  0%, 88%, 100% { box-shadow: none; }
  92%, 96% {
    filter:
      drop-shadow(0 0 10px #ffe27a)
      drop-shadow(0 -6px 26px #ffb84d)
      drop-shadow(0 -4px 44px #ff5a1f)
      drop-shadow(0 -8px 60px rgba(255,60,30,0.55));
  }
}
```

> Si querés conservar **sólo una keyframe** (por simplicidad), `auraBreathe` sola ya da un salto cualitativo respecto a la actual.

### 4.3 Bonus opcional — partículas

Para reforzar el efecto sin imágenes extra: tres `<span>` con `radial-gradient` y `animation: rise 4s linear infinite` con `delay` distinto, posicionados detrás del PNG de Goku. Pequeñas chispas que suben. **Opcional**, sólo si querés llevarlo más allá; sin ellas el aura ya respira mejor.

### 4.4 Accesibilidad

```css
@media (prefers-reduced-motion: reduce) {
  .goku, .goku-mobile { animation: none; filter: drop-shadow(0 0 14px #ffa53e); }
  .react-icon         { animation: none; }
}
```

---

## 5. Otros bugs/ajustes detectados

1. `metadata` en `layout.tsx` sigue como `"Create Next App"` → cambiar a:
   ```ts
   { title: "Javier Bravo · Front-end Developer",
     description: "Portafolio personal — Next.js, Rust, T3 stack." }
   ```
2. `<header>` con `border: groove 3px` se ve dated — `border-bottom: 1px solid var(--line)` es más limpio.
3. `public/ramen.ńg` (sí, con `ń`) es un archivo basura; conviene borrarlo.
4. `latest.jpeg` ya no se usa en `latest/page.tsx` pero sí en `contact/page.tsx` (importado pero no renderizado). Limpiar imports muertos.
5. Tipografía de los párrafos: pasar `font-family: Arial, Helvetica, sans-serif` global a la fuente Inter ya importada.
6. `<br />` manuales en todos los párrafos: reemplazar por párrafos reales — el wrapping responsive lo hace mejor el navegador.
7. La animación `verticalin` con `scaleX(700%)` produce blur fuerte; bajar a `scaleX(400%)` mantiene el efecto sin destruir la legibilidad del título vertical.

---

## 6. Plan de implementación sugerido (orden de menor a mayor riesgo)

1. **Quick wins** (1 sesión): aplicar `inter.className` al `body`, arreglar `metadata`, corregir typos, fix del link de LinkedIn, limpiar `5pxx`, fijar el archivo `ramen.ńg`.
2. **Aura de Goku**: reemplazar `auraAnimation` por `auraBreathe` + `auraFlicker`. Pequeño, alto impacto.
3. **Texto About**: re-redactar el copy según §3.2 sin tocar layout.
4. **Layout Latest + Contact**: pasar de `translateX/Y` a grid/flex. Esto es lo que más mueve la fragilidad responsive.
5. **Paleta + header**: aplicar variables CSS y rediseñar header.
6. **Unificación mobile/desktop**: colapsar componentes duplicados con utilidades de Tailwind.

Cada paso es independiente y reversible — se puede parar tras el #2 y la página ya se siente mucho más sólida.

---

## 7. Lo que NO se cambia (respetar la esencia)

- Fondo crema.
- Goku en el footer + frase "Sleep, code, eat…".
- Ramen decorativo.
- Tipografía vertical de los títulos.
- Animación rotando del logo de React.
- El sidebar de íconos del stack como navegación temática.
- El tono personal y directo del About ("yoga slackliner, dota2, didgeridoo").

La idea es que un visitante que ya conoce la página sienta que es **la misma**, sólo que mejor cuidada.
