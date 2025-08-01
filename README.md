# Prueba Técnica - React Native Junior (TypeScript)

## 📱 Descripción
Aplicación móvil desarrollada con React Native y TypeScript que consume la API pública Fake Store API. La aplicación cuenta con navegación por pestañas y presenta dos secciones principales: Home y Perfil.

## 🚀 Características
- ✅ **Navegación por pestañas** con dos secciones principales
- ✅ **Lista de productos** con imagen, título y precio
- ✅ **Pantalla de detalle** del producto con información completa
- ✅ **Perfil de usuario** con información personal y dirección
- ✅ **Manejo de estados de carga** y errores
- ✅ **Pull to refresh** en ambas pestañas
- ✅ **Diseño responsivo** y moderno
- ✅ **TypeScript** para tipado fuerte
- ✅ **Arquitectura limpia** con separación de responsabilidades

## 📁 Estructura del Proyecto
```
src/
├── components/           # Componentes reutilizables
│   ├── ProductCard.tsx
│   ├── LoadingSpinner.tsx
│   ├── ErrorMessage.tsx
│   └── index.ts
├── screens/             # Pantallas de la aplicación
│   ├── HomeScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── ProductDetailScreen.tsx
│   └── index.ts
├── services/            # Servicios para consumir APIs
│   └── api.ts
├── types/               # Definiciones de tipos TypeScript
│   └── index.ts
└── navigation/          # Configuración de navegación
    └── AppNavigator.tsx
```

## 🛠 Tecnologías Utilizadas
- **React Native** con Expo
- **TypeScript** para tipado estático
- **React Navigation v6** para navegación
- **Fake Store API** como fuente de datos
- **Fetch API** para peticiones HTTP

## 📋 Funcionalidades

### 🏠 Pestaña Home
- Lista todos los productos de la API
- Muestra imagen, título, categoría y precio
- Navegación al detalle del producto al tocarlo
- Pull to refresh para recargar productos
- Manejo de estados de carga y error

### 👤 Pestaña Perfil
- Muestra información del usuario con ID 1
- Información personal (nombre, usuario, email, teléfono)
- Dirección completa con ubicación geográfica
- Diseño de tarjetas organizadas por secciones
- No muestra información sensible como contraseñas

### 📄 Pantalla de Detalle
- Imagen del producto en alta resolución
- Información completa (nombre, categoría, precio, descripción)
- Rating y número de reseñas si está disponible
- Botón para volver a la lista de productos

## 🎨 Características de Diseño
- Paleta de colores moderna y consistente
- Iconos emoji para mejor UX
- Sombras y bordes redondeados
- Tipografía bien jerarquizada
- Estados visuales para loading y errores
- Diseño responsivo que se adapta a diferentes tamaños

