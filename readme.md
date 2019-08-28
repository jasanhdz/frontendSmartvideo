# Frontend Dev

## DOM, CSSOM, RENDER TREE y el proceso

DOM: Document Object Model. Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.

CSSOM: así como el DOM para el HTML, EL CSSOM es una representación de objetos de nuestros estilos en CSS.

Render Tree: es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

Pasos que sigue el navegador para construir las páginas web:

Procesa el HTML para construir el DOM.
Procesa el CSS para construir el CSSOM.
El DOM se une con el CSSOM para crear el Render Tree.
Se aplican los estilos CSS en el Render Tree.
Se "pintan" los nodos en la pantalla para que los usuarios vean el contenido de la página web.

## Medidas CSS

absolutas: in, cm, mm, px, pt, pc
relativas: %, vmax, ex, vw, vmin, rem, em, ch

## Tipos de display

Block

quiero que pensemos en esté display como el flujo que tenemos cada vez que escribimos. Por ejemplo, nosotros escribimos de izquierda a derecha, pero cuando se nos acaba el espacio horizontalmente, seguimos abajo. Esté es el flujo de bloque en nuestra escritura(de arriba a bajo) y es exactamente el que obedece display block, lo que quiere decir que los elementos se visualizan uno debajo del otro.

Algunos elementos que por defecto tienen este tipo de display son: 
``<div>, <p>, <h1>, <section> y <ul>``

Inline:

Pensemos en este display como la linea base que seguimos para escribir, que en el caso del latín es de izquierda a derecha. Por lo tanto todos los elementos con esté display se visualizarán uno al lado del otro de izquierda a derecha.

Algunos elementos que por defecto tienen este tipo de display son: "<span>, <em>, <b>".

Inline-block

Esté display es muy similar al display inline, sin embargo este respeta el width y el height que se le asigne a los elementos.

None

Esté display es utilizado para ocultar elementos sin elimnarlos por completo del DOM.

Table

Los elementos con esté display se comportan como los elementos <table>.

Flex

Centrar elementos, alinearlos a la derecha o izquierda, siempre ha sido una tarea difícil. Sin embargo, llega flexbox para ayudarnos con esté dilema. Para usar flexbox es indispensable la propiedad display: flex en el elemento padre que por defecto alineará los elementos hijos de izquierda a derecha. También, esté display suele acompañarse por otras propiedades como justify-content y algin-items.

Trabajar con flexbox no basta solo con escribir display: flex, también es muy importante que entendamos cómo funciona y para ello te dejo la siguiente documentación:

[url](https://css-tricks.com/snippets/css/a-guide-to-flexbox)

Grid

Despues de flexbox, llega el más poderoso sistema de layput: CSS Grid y para implementarlo debemos hacer uso de display: grid en el elemento contenedor o elemento padre.

Al igual que con flexbox, CSS Grid requiere un estudio adicional ya que no basta con colocar display, para ello te dejo la siguiente guía: [url](https://css-tricks.com/snippets/css/complete-guide-grid)

## Posicionamiento

El posicionamiento en CSS es una de las cosas más importantes, pues establece cómo van a estar ubicados nuestros elementos en la pantalla.

En CSS los elementos se posicionan utilizando las propiedades top (superior), bottom (inferior), left (izquierda) y right (derecha), pero sólo funcionarán si la propiedad position está establecida. Esto quiere decir que si quiero que mi elemento div esté completamente a la derecha, debo escribir en mi CSS lo siguiente:

``div { position: absolute; right: 0px; }``

La propiedad position tiene 7 valores diferentes: relative, absolute, fixed, sticky, static, initial e inherit. Veremos de qué se tratan:

**relative:**
El elemento se posiciona en relación a su posicion normal.

**absolute:**
Los elementos con esta posicion se ubican en relación al elemento relativo más cercano. Auí podemos hacer uso de las propiedades **top, bottom, left, rigth**.

**sticky:** 
El elemento se posiciona en función de la posición de desplazamiento del usuario. Si lo ubicas a la izquierda, siempre va a estar ahi sin importar cuántas veces se haga scroll en la página, por ejemplo:

**static:**
Los elementos HTML son estáticos por defecto, siguen el flujo normal de la página y no se ven afectados por las propiedades top, bottom, left y rigth.

**initial:**
Ubica el elemento en la posición que tiene de forma predeterminada.

**inherit:** 
Como su nombre lo indica, esté valor hereda está propiedad de su elemento padre.

## ¿Qué son y para que nos sirven las Arquitecturas CSS?

- Objetivos:
  - Precindible
  - Reutilizable
  - Mantenible
  - Escalable

- **Buenas prácticas**
  - Establecer reglas
  - Explicar la estructura de base
  - Establecer estándares de codificación.
  - Evitar largas hojas de estilo
  - Documentación

## Métodologías

### OOCSS, BEM, SMACSS, ITCSS y Atomic Design

OOCSS: CSS orientado a objetos; que separa lo que es el diseño del contenido, así nosotros podemos reutilizar mejor nuestro código, ejemplo:

```html
<style>
  .globalWidth {
    width: 100%
  }
  .footer {
    /* width: 100%; */
    background-color: red;
  }
  .header {
    /* width: 100%; */
    background-color: green;
  }
</style>
<body>
  <header class="header gobalWidth">Header</header>Header
  <footer class="footer gobalWidth">Footer</fFooterooter>
</body>
```

BEN: Block element modify -> Separa los bloques, los elementos y los modificadores, ejemplo:

```html
<body>
  <header class="header">
    <button class="header__button--red">Red</button>
    <button class="header__button--yellow">Red</button>
  </header>
</body>
```

### SMACSS: Arquitectura de CSS Escalable y modular (5 steps)
1. **_Base_**: Dividir css en componentes base, estos componentes son los componentes o elementos en toda nuestra aplicación como lo botones.
2. **_Layout_**: Son elementos que se usan en la página una sola vez, como por ejemplo el header o el footer.
3. **_Module_** : Son componentes que estariamos utilizando en nuestra aplicación más de una vez.
4. **_State_**: Un botón puede ser verde y al darle click puede cambiar de verde a rojo, event switch
5. **_Theme_**: No todas las aplicaciones tienen temas pero la idea es que cuando cambien los temas de los colores, también se vean reflejados y los podamos separar de ese código, que solo sea trabajar en los estilos o en esos colores determinados de ese tema.

### ITCSS: Triangulo invertido de CSS 
Nos inidica poder dividir todos nuestros archivos de CSS en ciertas partes para que no se combinen entre sí, esté modulo nos indica que dividamos: *Ajustes, herramientas, elementos, objetos, componentes, utilidades*. Está es una es una muy buena metodología que podriamos aplicar en nuestro elementos y podríamos evitar también el tema de la especificidad.

Cuando hablamos de especificiad quiere decir que hay elementos o hay clases que tienen mucho mayor peso que otros, por ejemplo cuando trabajamos con clases, (Orient Object CSS) nos dimos cuenta que colocamos 2 clases en el mismo atributo clase, colocamos gobalWidth y header, lo que quiere decir es que **La _primera clase_ es mucho más especifica que la segunda_**. Es decir que la primera tiene muchisímo más peso que la otra que colocamos eso aveces tiene especificaciones un poco negativas y nos hace a nosotros como desarrolladores colocar el atributo "**!important**". No es muy buena práctica porque colocar important nos haría que ese elemento de por más que lo modifiquemos no se deje.

### Atomic Design

Basado en química y separado en atomos. Los atomos serían los elementos más pequeños como por ejemplo botones, seguido por las moleculas que ya sería como un conjunto de de esos botones y así sucesivamente va creciendo a medida de que va formando lo que son organismos, templates y páginas completas.

