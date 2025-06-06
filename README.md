# 🏓 Padel Shop

**Padel Shop** es una aplicación móvil desarrollada en **React Native** con **Expo**, orientada a la compra de productos relacionados al pádel. Los usuarios pueden registrarse, iniciar sesión y navegar por productos para agregarlos a su carrito y realizar compras.

---

## 🚀 Características principales

- Autenticación de usuarios (Firebase)
- Catálogo de productos de pádel
- Agregado y persistencia de productos en el carrito
- Navegación por pestañas
- Mapa para ubicaciones relacionadas (tiendas, eventos, etc.)
- Base de datos local usando SQLite

---

## 📲 Cómo iniciar el proyecto

1. **Cloná el repositorio:**

   ```bash
   git clone https://github.com/vicomatias/padel-shop-app.git
   cd padel-shop
   ```

2. **Instalá las dependencias:**

   ```bash
   npm install
   ```

3. **Iniciá el servidor de desarrollo con Expo:**

   ```bash
   npx expo start
   ```

4. Escaneá el código QR con la app de Expo Go en tu dispositivo móvil o usá un emulador Android/iOS.

---

## 📦 Dependencias usadas
#### 🔧 Funcionales principales

- **expo**: Plataforma base para desarrollo con React Native sin configuración nativa compleja.
- **react-native**: Framework para desarrollar apps móviles nativas con React.
- **react**: Librería base para interfaces de usuario.

#### 🧭 Navegación

- **@react-navigation/native**: Biblioteca principal para navegación.
- **@react-navigation/native-stack**: Navegación estilo stack (pantallas que se apilan).
- **@react-navigation/stack**: Versión anterior de navegación stack (puede estar por compatibilidad).
- **@react-navigation/bottom-tabs**: Navegación mediante pestañas inferiores.

#### 🛒 Estado global

- **@reduxjs/toolkit**: Manejo moderno y simplificado del estado global con Redux.
- **react-redux**: Enlace entre Redux y los componentes de React.

#### 🔥 Backend

- **firebase**: Autenticación y almacenamiento remoto de datos.

#### 💾 Almacenamiento local

- **expo-sqlite**: Base de datos SQLite para guardar información local como el carrito.

#### 🖼️ Multimedia

- **expo-image-picker**: Permite seleccionar imágenes de la galería o tomar fotos con la cámara.

#### 🗺️ Geolocalización

- **react-native-maps**: Mostrar mapas nativos para funcionalidades basadas en ubicación.

#### 📱 UI y rendimiento

- **react-native-reanimated**: Animaciones fluidas y eficientes.
- **react-native-gesture-handler**: Manejo de gestos como deslizamiento y toques complejos.
- **react-native-screens**: Mejora el rendimiento en la navegación.
- **react-native-safe-area-context**: Manejo de áreas seguras en pantallas con muescas o bordes curvos.

#### 🟢 Otros

- **expo-status-bar**: Control visual de la barra de estado del sistema.

---

## 🛠️ Por hacer / Futuras mejoras

- Integración con pasarelas de pago
- Notificaciones push
- Favoritos / Lista de deseos
- Historial de compras
- Panel de administración