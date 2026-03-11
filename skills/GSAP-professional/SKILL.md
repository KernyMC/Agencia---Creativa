---
name: gsap-motion-engineer-ultra
description: >
  Sistema completo para diseñar, arquitecturar y optimizar animaciones
  avanzadas con GSAP 3. Incluye scroll storytelling, motion systems,
  UI micro-interactions, performance engineering y patrones de animación
  utilizados en sitios modernos de alto nivel.
metadata:
  version: "3.0.0"
  gsap_version: "3.x"
  tags:
    - gsap
    - motion-design
    - animation-architecture
    - scrolltrigger
    - frontend
    - ui-animation
---

# GSAP Motion Engineer ULTRA

Skill diseñado para convertir al asistente en un **Motion Engineer experto en GSAP** capaz de construir sistemas completos de animación web.

Puede:

- diseñar sistemas de motion
- crear animaciones cinematográficas
- implementar scroll storytelling
- crear micro-interacciones avanzadas
- optimizar performance

---

# Filosofía del Motion Design

Las animaciones deben:

1. Guiar atención
2. Explicar interacción
3. Generar emoción
4. Dar feedback

Si una animación no cumple uno de estos objetivos, probablemente es innecesaria.

---

# Mental Model de Animación

Siempre definir:

estado inicial  
estado final  
driver de animación  

Drivers posibles:

- tiempo
- scroll
- hover
- click
- drag
- layout change
- state change

---

# Arquitectura profesional

Separar animaciones del resto del código.

Estructura:

```
src/

animations/
hero.js
cards.js
parallax.js
story.js
pageTransitions.js

motion/
tokens.js
easing.js

utils/
gsapSetup.js
```

---

# Motion Tokens (Design System)

```javascript
export const motion = {

duration:{
fast:0.25,
normal:0.6,
slow:1.2
},

ease:{
smooth:"power2.out",
dramatic:"power4.out",
soft:"power1.out"
}

}
```

Uso:

```javascript
gsap.to(".card",{
duration:motion.duration.normal,
ease:motion.ease.smooth
})
```

---

# GSAP Core

### Tween

```javascript
gsap.to(".box",{
x:200,
duration:1,
ease:"power2.out"
})
```

---

### From

```javascript
gsap.from(".box",{
y:60,
opacity:0,
duration:1
})
```

---

### FromTo

```javascript
gsap.fromTo(".box",
{scale:0.8},
{scale:1,duration:0.6}
)
```

---

# Timelines

Permiten coreografías complejas.

```javascript
const tl = gsap.timeline()

tl
.from(".title",{y:40,opacity:0})
.from(".subtitle",{y:30,opacity:0},"-=0.4")
.from(".cta",{scale:0.9,opacity:0},"-=0.3")
```

---

# Posiciones relativas

```
"<" empieza con anterior
">" después del anterior
"-=0.3" overlap
"+=0.3" delay
```

---

# Stagger

```javascript
gsap.from(".card",{
y:40,
opacity:0,
stagger:0.12
})
```

---

# ScrollTrigger

Registro

```javascript
gsap.registerPlugin(ScrollTrigger)
```

---

## Animación básica

```javascript
gsap.from(".title",{

scrollTrigger:{
trigger:".section",
start:"top 80%"
},

y:50,
opacity:0

})
```

---

# Scrub

```javascript
gsap.to(".image",{

scrollTrigger:{
trigger:".image",
start:"top center",
end:"+=400",
scrub:true
},

scale:1.2

})
```

---

# Pin storytelling

```javascript
const tl = gsap.timeline({

scrollTrigger:{
trigger:".story",
start:"top top",
end:"+=2000",
scrub:1,
pin:true
}

})
```

---

# Flip

Para animar cambios de layout.

```javascript
const state = Flip.getState(".card")

container.appendChild(card)

Flip.from(state,{
duration:0.6
})
```

---

# MotionPath

```javascript
gsap.to(".rocket",{

motionPath:{
path:"#path",
align:"#path"
},

duration:5

})
```

---

# Draggable

```javascript
Draggable.create(".slider",{
type:"x",
bounds:".container"
})
```

---

# Observer

Detecta gestos:

- scroll
- wheel
- touch
- pointer

Ideal para presentaciones interactivas.

---

# 20 Patrones de Animación Profesionales

## 1 Hero reveal

title  
subtitle  
cta  
background motion

---

## 2 Grid reveal

cards aparecen con stagger.

---

## 3 Scroll storytelling

secciones fijadas con timeline.

---

## 4 Parallax

background se mueve más lento.

---

## 5 Text reveal

animar palabras o letras.

---

## 6 Section fade

contenido aparece al entrar.

---

## 7 Card hover

scale + shadow.

---

## 8 Magnetic button

cursor atrae botón.

---

## 9 Smooth counters

números animados.

---

## 10 Image zoom scroll

zoom progresivo.

---

## 11 Horizontal scroll

sección desplazable horizontal.

---

## 12 Page transitions

fade between pages.

---

## 13 Loading intro

animación antes del contenido.

---

## 14 Floating elements

movimiento continuo.

---

## 15 Drag interactions

elementos arrastrables.

---

## 16 Scroll pinned scenes

escenas que cambian con scroll.

---

## 17 Video synced scroll

video ligado al scroll.

---

## 18 Cursor follower

cursor con efectos.

---

## 19 Progress indicators

barra de progreso scroll.

---

## 20 Reveal masks

animaciones con clip-path.

---

# Performance Engineering

Animar solo:

```
transform
opacity
```

Evitar:

```
top
left
width
height
```

---

# GPU Acceleration

```
transform: translateZ(0)
```

---

# ScrollTrigger batch

```javascript
ScrollTrigger.batch(".card",{

onEnter:(elements)=>{

gsap.from(elements,{
y:40,
opacity:0,
stagger:0.1
})

}

})
```

---

# Debugging

Activar markers.

```javascript
markers:true
```

---

# Problemas comunes

### animación no corre

verificar

selector  
imports  
dom loaded

---

### scrolltrigger no funciona

verificar

trigger  
start  
overflow hidden

---

# Accesibilidad

Detectar:

```
prefers-reduced-motion
```

Ejemplo:

```javascript
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){

gsap.set("*",{clearProps:"all"})

}
```

---

# GSAP con React

```javascript
useLayoutEffect(()=>{

const ctx = gsap.context(()=>{

gsap.from(".box",{x:-100,opacity:0})

})

return ()=>ctx.revert()

},[])
```

---

# Workflow profesional

1 diseñar animación  
2 definir timeline  
3 implementar tween base  
4 ajustar timing  
5 optimizar  
6 test mobile  
7 test accesibilidad  

---

# Estrategia universal

1 definir estados  
2 elegir driver  
3 crear timeline  
4 aplicar easing  
5 optimizar  

---

# Resultado

Con este skill se pueden crear:

landing pages con motion avanzado  
scroll storytelling  
experiencias tipo Awwwards  
UI micro-interactions  
animaciones complejas optimizadas

---