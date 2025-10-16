# Web Project Around Express

## 📦 Descripción del Proyecto

Este proyecto consiste en la creación de una API básica utilizando Node.js y Express. Simula el backend del proyecto "Alrededor de los EE. UU." del curso de frontend, permitiendo el manejo de rutas para usuarios y tarjetas. Se trabaja con archivos JSON como fuente de datos temporal, en espera de integrar una base de datos en futuras etapas.

El servidor responde a rutas específicas con datos simulados, y está configurado para manejar errores 404 personalizados. Además, se implementa hot reload con `nodemon`, se configura un linter con ESLint siguiendo la guía de estilo Airbnb, y se establecen buenas prácticas de desarrollo como `.gitignore`, `.editorconfig` y estructura modular.

## 🚀 Funcionalidad

- Servidor Express corriendo en el puerto 3000
- Rutas disponibles:
  - `GET /users` → Lista de usuarios
  - `GET /cards` → Lista de tarjetas
  - `GET /users/:id` → Usuario por ID (404 si no existe)
  - Cualquier otra ruta → Error 404 con mensaje personalizado
- Hot reload con `nodemon`
- Validación de estilo con ESLint
- Modularización del proyecto (`routes`, `data`)
- Lectura de archivos JSON con `fs` y `path`

## 🛠️ Tecnologías y Herramientas Utilizadas

- **Node.js** y **Express** para el servidor
- **ESLint** con configuración Airbnb para mantener estilo y calidad
- **EditorConfig** para estandarizar formato entre editores
- **Nodemon** para reinicio automático del servidor en desarrollo
- **Módulos fs y path** para manejo de archivos
- **Postman** para pruebas de rutas
- **Estructura modular** con carpetas `routes` y `data`

## 📁 Estructura del Proyecto
