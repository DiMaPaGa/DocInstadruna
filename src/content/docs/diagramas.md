---
title: 7. Diagramas del Proyecto
---
<div class="justify-text">

A continuación, se presentan los principales diagramas que describen la arquitectura, las entidades, el comportamiento y los procesos internos de **Instadruna**. 

Estos recursos ayudan a visualizar el diseño técnico, la lógica funcional y la estructura de despliegue de la aplicación.


### 1. Diagrama de Casos de Uso


Describe los distintos casos de uso del sistema, representando las acciones que pueden realizar los usuarios (como crear publicaciones, comentar o enviar mensajes), así como aquellas reservadas a los administradores (personal del equipo de IT).


> ![Diagrama de Casos de Uso](/DiagramaCasoUso.png)



### 2. Diagrama de Clases

Representa las principales clases del sistema y sus relaciones, facilitando la comprensión de la estructura del código y de cómo interactúan las entidades. Se distinguen las clases pertenecientes al backend principal y, por separado, la clase Message del microservicio de chat.

#### a. Backend Principal

Muestra las clases principales utilizadas en el backend, así como sus relaciones, ayudando a entender la arquitectura lógica del sistema.

#### Diagrama de Clases Completo

<img src="/DiagramaClasesN.png" alt="Diagrama completo" />

> *Nota: Pincha sobre las ilustraciones de abajo para para ampliarlas y ver cada una de las zonas del diagrama.*

#### Parte 1: Mitad Superior

<img
  src="/DiagClases1.png"
  alt="Mitad izquierda del diagrama"
  class="lightbox-trigger"
  onclick="document.getElementById('lightbox-1').classList.add('active')"
/>

<div
  id="lightbox-1"
  class="lightbox-overlay"
  onclick="this.classList.remove('active')"
>
  <button
    class="lightbox-close-btn"
    onclick="document.getElementById('lightbox-1').classList.remove('active'); event.stopPropagation();"
  >
    &times;
  </button>
  <div class="lightbox-scroll-container" onclick="event.stopPropagation()">
    <img src="/DiagClases1.png" alt="Mitad izquierda del diagrama ampliado" />
  </div>
</div>

#### Parte 2: Mitad Inferior Derecha

<img
  src="/DiagClases2.png"
  alt="Mitad derecha del diagrama"
  class="lightbox-trigger"
  onclick="document.getElementById('lightbox-2').classList.add('active')"
/>

<div
  id="lightbox-2"
  class="lightbox-overlay"
  onclick="this.classList.remove('active')"
>
  <button
    class="lightbox-close-btn"
    onclick="document.getElementById('lightbox-2').classList.remove('active'); event.stopPropagation();"
  >
    &times;
  </button>
  <div class="lightbox-scroll-container" onclick="event.stopPropagation()">
    <img src="/DiagClases2.png" alt="Mitad derecha del diagrama ampliado" />
  </div>
</div>

#### Parte 3: Parte Inferior

<img
  src="/DiagClases3.png"
  alt="Parte inferior del diagrama"
  class="lightbox-trigger"
  onclick="document.getElementById('lightbox-3').classList.add('active')"
/>

<div
  id="lightbox-3"
  class="lightbox-overlay"
  onclick="this.classList.remove('active')"
>
  <button
    class="lightbox-close-btn"
    onclick="document.getElementById('lightbox-3').classList.remove('active'); event.stopPropagation();"
  >
    &times;
  </button>
  <div class="lightbox-scroll-container" onclick="event.stopPropagation()">
    <img src="/DiagClases3.png" alt="Parte inferior del diagrama ampliado" />
  </div>
</div>

#### b. Microservicio de Chat
Incluye la clase `Message` que no se encuentra relacionada directamente con otras clases.

> ![Diagrama Clases Chat](/Claseb2.png)


### 3. Diagrama Entidad-Relación (ER)

 Muestra las entidades principales del sistema y sus relaciones, proporcionando una visión clara de la estructura de las bases de datos empleadas en **Instadruna**, incluyendo tanto la base de datos del backend principal como la del microservicio de chat.

#### a. Backend Principal
Diagrama generado desde MySQL Workbench que muestra entidades clave como `Usuarios`, `Publicaciones`, `Historias`, etc.

> ![ER Backend](/ERB1.png)

#### b. Microservicio de Chat
Generado desde Turso, representa la única entidad del microservicio.

> ![ER Chat](/ERB2.png)


### 4. Diagrama de Componentes
Ilustra los componentes que conforman el sistema (frontend, backend, microservicio de chat y bases de datos) y las interacciones entre ellos. Representa la arquitectura modular y distribuida de la aplicación.

> ![Componentes](/ComponentesDiagramF.png)



### 5. Diagrama de Actividades
Representa flujos internos como la autenticación, creación de publicaciones o gestión de incidencias.

#### a. Logueo, Autenticación y Deslogueo

<div style="margin-left: 4rem;">

>![Secuencia Login](/DA1.png)

</div>

#### b. Crear Historia

<div style="margin-left: 4rem;">

>![Secuencia Login](/DA2.png)

</div>

#### c. Interactuar con Publicaciones

<div style="margin-left: 4rem;">

>![Secuencia Login](/DA3.png)

</div>


### 6. Diagramas de Secuencia

 Describe cómo interactúan los distintos componentes del sistema a lo largo del tiempo durante la ejecución de funcionalidades clave.

#### a. Publicaciones y Comentarios  
  
  ![Secuencia Publicaciones](/DiagramaSecuenciaPublicaciones.png)


#### b. Crear Ticket y Ver Estado  
  ![Secuencia Tickets](/DiagramaSecuenciaTiketsyEstado.png)

#### c. Perfil y Seguidores
  ![Secuencia Perfil](/DiagramaSecuenciaPerfilYSeguimientos.png)

#### d. Historias y Chat  
  
  ![Secuencia Historias Chat](/DiagramaSecuenciasHistoriasyChat.png)


#### e. Logout y Notificaciones
  
  ![Secuencia Logout](/DiagramaSecuenciasLogoutyNotificaciones.png)



### 7. Diagrama de Despliegue
Muestra cómo se distribuyen los diferentes elementos del sistema en el entorno de producción, incluyendo la infraestructura en la nube, el uso de contenedores Docker y la organización de servicios.

> ![Despliegue](/DiagramaDespliegue.png)



### 8. Casos de Prueba
Recogen situaciones diseñadas para validar el correcto funcionamiento de la aplicación, abarcando funcionalidades críticas como la autenticación, las publicaciones, el sistema de mensajería y la gestión de incidencias.

Se distinguen entre pruebas del front (codificadas como CPF) y pruebas del back (codificadas como CPB).

#### a. Autenticación  
  
  ![Autenticación](/CP1.png)

#### b. Publicaciones  
  
  ![Publicaciones](/CP2.png)

#### c. Comentarios 
  
  ![Comentarios](/CP3.png)

#### d. Perfil  
  
  ![Perfil](/CP4.png)

#### e. Tickets  
  
  ![Tickets](/CP5.png)

#### f. Historias  
  
  ![Historias](/CP6.png)

#### g. Social
  
  ![Social](/CP7.png)

#### h. Notificaciones  
  
  ![Notificaciones](/CP8.png)





</div>
