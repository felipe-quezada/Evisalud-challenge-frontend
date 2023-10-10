# Evisalud-challenge-frontend

> Reto para puesto de trabajo concistente en una landing page urilizando vue.

# Tecnologías aplicadas

Para la creación de la pagina se utilizó vue 3 como framework de trabajo y el estilo de API utilizado fue el Composition API, Vite como iniciador de projecto y para la creación y diseño de estilos de la pagina se implementó Tailwindcss. para el fetching de datos se utilizó axios js.

Se optó por crear la aplicación en modo mobile first a una resolución de 375px de ancho.

<div style = 'display:flex; justify-content:center; text-align:center; margin: 50px 0px;'>
<img style='margin: 0px 10px' src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png" alt="Vue" width="100px">
<img style='margin: 0px 10px' src="https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Tailwind-CSS1-900x0.png" alt="Tailwindcss" width="100px">
<img style='margin: 0px 10px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" alt="Vite" width="100px">
</div>

# Procedimiento y estrategia

La aplicación esta pensada para ser escalable al modularizar los componentes y trabajar en la landing page como vista para una futura implementacion de vue router. Se configuró ciertas clases nuevas para implementarlas con tailwind tales como la paleta de colores de las paginas.

Se usó puramente tailwind y js para la creación de estios inamiaciónes tales como el boton del menu hamburguesa para mobiles

![Hidden Menu](./src/assets/img/hiddenMenu.png)
![Menu desplegado](./src/assets/img/displayMenu.png)

> > En sintesis, la aplicación quedó ordenada y proyectada a ser expandida

![Scaffolding project](./src/assets/img/scaffolding.png)

# Dato de profesores

Se optó por traer los datos desde la api que se entregó usando axios para ello. Esta parte del proyecto se modularizó para dejarlo dentro de un componente llamado TeacherProfile, este renderiza la data, el formato en el cual se entrega es una lista que tiene animación.

> Desktop mode
> ![Teacher profile](./src/assets/img/teacherComponent.png)

> Mobile mode
> ![Teacher profile](./src/assets/img/teacherComponentMobile.png)

# NavBar y Footer

Se modularizó tanto el menu de navegación como el footer y estas se encuentran renderizadas dentro del archivo app como parte de la plantilla general, asi solamente lo que esta dentro de la etiqueta "main" será lo que se deba cambiar para las siguientes páginas.

Asi quedaron estas dos:

> NavBar Desktop
> ![Teacher profile](./src/assets/img/navBarDesk.png)

> NavBar Mobile
> ![Teacher profile](./src/assets/img/navBarMobile.png)

> Footer Desktop
> ![Teacher profile](./src/assets/img/footerDesk.png)

> Footer Mobile
> ![Teacher profile](./src/assets/img/footerMobile.png)

# Retos

Propuse armar las animaciones por mi cuenta armando la logica de cada parte, así nació el menu hamburguesa y el display en forma de acordión del modulo de teachers.

# Conclusión

En resumen, este reto fue una gran oportunidad de sacar mi potencial y poder mostrar lo que he aprendido y lo que puedo seguir aprendiendo, me gustaría adentrarme más, conociendo cada dia mas y aprendiendo a hacer el trabajo cada dia mas eficientemente. Esta oportunidad de trabajo es una gran forma de seguir reforzando mis conocimientos y adquirir nuevos.

# Aplicación desplegada

_in contruction_
