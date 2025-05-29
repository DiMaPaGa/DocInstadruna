---
title: 4. Guía de instalación
---

<div class="justify-text">

## 4.1. Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** (versión 16 o superior)
- **npm**
- **Java 17** (o versión compatible con **Spring Boot 3**)
- **Docker** (para contenerización y despliegue en MV Azure)
- **Expo CLI** (**npm install -g expo-cli**)
- **MySQL** (local o servidor flexible en Azure, accesible desde la MV Azure)
- Cuenta activa en **Turso** (para almacenamiento de bases de datos del chat en la nube).
- Cuenta activa en **Azure** (para despliegue en la MV Azure).
- Cuenta activa en **Google** (para autenticación con Google Sign-In).
- Cuenta activa en **Expo** (para notificaciones en tiempo real).  

## 4.2. Instalación del Frontend (Aplicación móvil React Native)

1. Clona el repositorio del frontend:

```bash
git clone https://github.com/DiMaPaGa/InstadrunaDeploy.git
cd InstadrunaDeploy
``` 

2. Instala las dependencias del frontend:

```bash
npm install
```

3. Inicia la aplicación:

```bash
npm expo start
```

Sigue las instrucciones en pantalla para abrirla en un emulador o dispositivo físico.

## 4.3. Instalación del Backend principal (Spring Boot + MySQL)

1. Clona el repositorio del backend:

```bash
git clone https://github.com/DiMaPaGa/vedruna-backend.git
cd vedruna-backend
```
2. Instala las dependencias del backend:

```bash
mvn clean install
mvn spring-boot:run
```

3. Accede a http://51.120.11.157:8080 para ver la documentación de la API.

## 4.4. Instalación del Microservicio de chat (Node.js + Socket.IO)

1. Clona el repositorio del microservicio de chat:

```bash
git clone https://github.com/DiMaPaGa/VedruChat.git
cd VedruChat
```

2. Instala las dependencias del microservicio de chat:

```bash
npm install
```

3. Inicia el microservicio de chat:

```bash
npm run dev
```
## 4.5. Arrancar proyectos backend y microservicios desplegados en Azure

1. Clona el repositorio del microservicio de chat en un nuevo directorio:

```bash
git clone https://github.com/DiMaPaGa/VedruChat.git
cd VedruChat
```

2. Crea un archivo `.env` con las variables de entorno:

```bash
cp .env.example .env
```
3. Crea un archivo `Dockerfile` para el microservicio de chat con la siguiente configuración:

```bash
# Imagen base oficial de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./
COPY server/ ./server/
COPY client/ ./client/
COPY .env ./

# Instala las dependencias
RUN npm install

# Expone el puerto (ajusta si usas otro en .env)
EXPOSE 3000

# Comando para arrancar el servidor
CMD ["node", "server/index.js"]
```

4. Crea un directorio `backend` para el backend principal en el mismo nivel en el que esté el microservicio de chat e incorpora el .jar del proyecto principal.
   
5. Crea un archivo `Dockerfile` para el backend con la siguiente configuración: 

```bash
# Usa una imagen base de OpenJDK
FROM openjdk:17-jdk-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo .jar a la imagen
COPY vedruna-backend-0.0.1-SNAPSHOT.jar /app/vedruna-backend.jar

# Copia el archivo .env a la imagen
COPY .env /app/.env


# Expone el puerto en el que se ejecuta la aplicaciÃ³n
EXPOSE 8080

# Comando para ejecutar la aplicaciÃ³n Spring Boot
ENTRYPOINT ["java", "-jar", "vedruna-backend.jar"]
```

6. Crea un archivo .env con las variables de entorno. 

7. Crea un archivo `docker-compose.yml` con la siguiente configuración:

```bash
version: '3.8'

services:
  backend:
    build:
      context: ./backend
    container_name: vedruna-backend
    env_file: ./backend/.env
    ports:
      - "8080:8080"
    networks:
      - app-network

  chat:
    build:
      context: ./chat
    container_name: chat-app
    env_file: ./chat/.env
    ports:
      - "3000:3000"
    depends_on:
      - backend
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

8. Ejecuta el comando `docker-compose up` para arrancar los proyectos en contenedores Docker.

9. Accede a http://51.120.11.157:8080/swagger-ui/index.html para ver la documentación de la API.

## 4.6. Arrancar el frontend en Expo EAS Build

1. Escanea en tu dispositivo el siguiente código QR:
<div style="text-align: center; margin-top: 1rem;">
  <img src="/QRr.png" alt="Escanea para descargar Instadruna" width="220" style="display: block; margin: 1rem auto;" />
  <p><em>Escanea el código QR para descargar la APK de Instadruna</em></p>
</div>

2. Una vez instalada, aceptando los permisos, inicia la aplicación desde tu dispositivo.
   
3. Recuerda aceptar las notificaciones en tu dispositivo para recibir notificaciones en tiempo real, autenticación con Google y los permisos de cámara y galería.

</div>