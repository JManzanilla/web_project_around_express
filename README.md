# Around — API REST con Express

Backend REST para la plataforma Around, construido con Node.js, Express y MongoDB. Expone endpoints para gestionar usuarios y tarjetas, con validación de esquemas y manejo de errores HTTP.

## Descripción

API que sirve como backend del proyecto Around. Implementa operaciones CRUD completas para usuarios y tarjetas, persistencia con MongoDB a través de Mongoose, y validación de datos en los modelos. Incluye un middleware temporal para simular autenticación durante el desarrollo.

## Tecnologías utilizadas

- Node.js 18+
- Express 5
- MongoDB + Mongoose 8
- ESLint con configuración Airbnb
- Nodemon (desarrollo)

## Endpoints

### Usuarios

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/users` | Lista todos los usuarios |
| GET | `/users/:userId` | Obtiene un usuario por ID |
| POST | `/users` | Crea un nuevo usuario |
| PATCH | `/users/me` | Actualiza nombre y descripción |
| PATCH | `/users/me/avatar` | Actualiza el avatar |

### Tarjetas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/cards` | Lista todas las tarjetas |
| POST | `/cards` | Crea una nueva tarjeta |
| DELETE | `/cards/:cardId` | Elimina una tarjeta (solo el propietario) |
| PUT | `/cards/:cardId/likes` | Agrega un like |
| DELETE | `/cards/:cardId/likes` | Elimina un like |

## Instalación

Requisitos: Node.js >= 18, MongoDB corriendo localmente.

```bash
git clone git@github.com:JManzanilla/web_project_around_express.git
cd web_project_around_express
npm install
```

Inicia MongoDB y luego:

```bash
npm run dev   # Desarrollo con recarga automática (nodemon)
npm start     # Producción
```

La API corre en `http://localhost:3000` y se conecta a `mongodb://localhost:27017/aroundb`.

## Scripts

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia con `node app.js` |
| `npm run dev` | Inicia con nodemon (auto-reload) |
| `npm run lint` | Ejecuta ESLint |

## Manejo de errores

| Código | Causa |
|--------|-------|
| 400 | Datos inválidos o ID mal formado |
| 403 | Acción no permitida (ej. borrar tarjeta ajena) |
| 404 | Recurso no encontrado |
| 500 | Error interno del servidor |

## Nota sobre autenticación

El proyecto incluye un middleware temporal en `app.js` que inyecta un `req.user._id` fijo para pruebas locales. Debe reemplazarse por autenticación real (JWT) antes de pasar a producción. Ver [web_project_api_full](https://github.com/JManzanilla/web_project_api_full) para la versión con autenticación completa.

## Estructura del proyecto

```
web_project_around_express/
├── app.js
├── controllers/
│   ├── users.js
│   └── cards.js
├── models/
│   ├── user.js
│   └── card.js
├── routes/
│   ├── users.js
│   └── cards.js
└── utils/
    └── validator.js
```

## Autor

Jesus Manzanilla — [GitHub](https://github.com/JManzanilla)
