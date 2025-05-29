---
title: 3. Tecnologías Utilizadas
---

<div class="justify-text">

**<span style="color:#33c4ff; font-weight:bold;">Instadruna</span>** se ha desarrollado aplicando una arquitectura modular por capas, que combina un frontend móvil, un backend principal y un microservicio independiente para el chat. Esta separación facilita la escalabilidad, el mantenimiento independiente de cada módulo y una arquitectura más limpia y organizada.

### Frontend (Aplicación móvil con React Native)

- **React Native:** Framework utilizado para construir la aplicación móvil nativa desde una base de código única en JavaScript.
- **Expo:** Herramienta que simplifica el desarrollo, pruebas y ejecución de apps en React Native.
- **React Navigation (@react-navigation/*):** Librerías para la gestión de la navegación entre pantallas.
- **Expo Auth Session:** Para el inicio de sesión con cuentas de Google.
- **React Native WebView:** Permite mostrar contenido web dentro de la app.
- **React Native Async Storage:** Para el almacenamiento local de datos.
- **Expo Image Picker:** Para seleccionar imágenes del dispositivo.
- **Jest + Jest Expo:** Herramientas utilizadas en las pruebas del frontend.
- **TypeScript:** Utilizado en combinación con React Native para un tipado más seguro.

### Backend principal (Spring Boot + MySQL)

- **Spring Boot:** Framework base para la creación del backend, incluyendo los módulos:
  - **spring-boot-starter-web**: Para la construcción de APIs REST.
  - **spring-boot-starter-data-jpa**: Para el acceso y persistencia en la base de datos.
  - **spring-boot-starter-security**: Para la gestión de la seguridad y roles.
  - **spring-boot-starter-validation**: Para validaciones automáticas de datos.
- **MySQL:** Sistema de gestión de bases de datos utilizado para almacenar los datos principales (usuarios, publicaciones, comentarios, etc.).
- **SpringDoc OpenAPI:** Para documentar de forma automática la API mediante Swagger.
- **Lombok:** Para reducir el código repetitivo en las entidades y servicios.
- **Jakarta Persistence API:** Para el soporte de JPA actualizado.

### Microservicio de chat (Node.js + WebSockets)

**Instadruna** incorpora un microservicio independiente para la mensajería instantánea, encargado exclusivamente de gestionar las comunicaciones en tiempo real, desacoplado del backend principal para optimizar el rendimiento y la escalabilidad:

- **Node.js + Express:** Para definir las rutas básicas y el servidor del microservicio.
- **Socket.IO:** Implementación de WebSockets para la comunicación en tiempo real entre usuarios.
- **LibSQL (@libsql/client):** Motor de base de datos ligero y rápido, usado para almacenar los mensajes del chat.
- **Morgan:** Middleware para el registro de peticiones HTTP.
- **dotenv:** Para la configuración de variables de entorno.

### Despliegue y Servicios Adicionales

#### Frontend

- **Expo EAS Build:** Despliegue eficiente del frontend para Android e iOS sin configuraciones complejas de compilación local.

#### Backend y Microservicios

- **Azure:** El backend principal y el microservicio de chat se desplegarán en Azure, ambos dockerizados para una mayor portabilidad y gestión eficiente.

#### Bases de Datos

- **MySQL (Backend Principal):** Base de datos MySQL alojada en un contenedor Docker dentro de Azure.
- **LibSQL (Microservicio de Chat):** LibSQL, alojada en Turso, para almacenar los mensajes del chat.

#### Servicios Adicionales

- **Autenticación con Google:** Login mediante Google Sign-In con Expo Auth Session.
- **Expo Push Notifications:** Notificaciones en tiempo real mediante Expo Push Notifications.

</div>