# 🛒 Carrito de Compras - Proyecto Mejorado

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web de carrito de compras para cursos online desarrollada con HTML, CSS y JavaScript vanilla. El proyecto original ha sido mejorado con **5 funcionalidades nuevas** que optimizan significativamente la experiencia del usuario.

---

## ✨ Funcionalidades Originales

- ✅ Añadir cursos al carrito
- ✅ Eliminar cursos del carrito
- ✅ Vaciar todo el carrito
- ✅ Persistencia de datos con LocalStorage
- ✅ Gestión de cantidades automática
- ✅ Interfaz responsive con Skeleton CSS

---

## 🚀 MEJORAS IMPLEMENTADAS

### 1️⃣ **Sistema de Búsqueda/Filtrado en Tiempo Real**

**Descripción**: Permite a los usuarios buscar cursos por nombre o profesor mientras escriben en el campo de búsqueda.

**Características**:
- 🔍 Filtrado instantáneo sin necesidad de hacer clic en buscar
- 📝 Búsqueda por título del curso o nombre del profesor
- 🎨 Animaciones suaves al mostrar/ocultar resultados
- ⚠️ Mensaje informativo cuando no hay resultados

**Cómo usarlo**:
1. Escribe en el campo de búsqueda en la sección hero
2. Los cursos se filtran automáticamente mientras escribes
3. Para ver todos los cursos de nuevo, borra el texto del campo

**Código relevante**: `js/app8.js` - funciones `filtrarCursos()` y `verificarResultadosBusqueda()`

**Captura visual**:
- Busca "JavaScript" y verás solo los cursos relacionados
- Busca "Manuel" y verás cursos de ese profesor

---

### 2️⃣ **Contador Visual del Carrito con Animaciones**

**Descripción**: Badge visual que muestra el número total de artículos en el carrito con animaciones llamativas.

**Características**:
- 🔴 Badge circular rojo sobre el icono del carrito
- 🎯 Muestra el número total de artículos
- ✨ Animación de pulso cada vez que se añade un producto
- 🎨 Diseño moderno con degradado y sombra

**Cómo funciona**:
- Se actualiza automáticamente al añadir/eliminar productos
- Desaparece cuando el carrito está vacío
- Visible desde cualquier parte de la página

**Código relevante**: `js/app8.js` - función `actualizarContadorCarrito()`
**Estilos**: `css/custom.css` - clase `.carrito-badge`

---

### 3️⃣ **Cálculo y Visualización del Total del Carrito**

**Descripción**: Muestra el precio total de todos los productos en el carrito en tiempo real.

**Características**:
- 💰 Cálculo automático del precio total
- 📊 Muestra también el número de artículos
- 🎨 Diseño destacado con degradado
- 🔄 Actualización instantánea al modificar el carrito

**Visualización**:
```
Total: 15.00€
Artículos: 5
```

**Ubicación**: Dentro del desplegable del carrito, sobre el botón "Vaciar Carrito"

**Código relevante**: `js/app8.js` - función `actualizarTotalCarrito()`
**Estilos**: `css/custom.css` - clase `.total-carrito`

---

### 4️⃣ **Sistema de Notificaciones Toast**

**Descripción**: Notificaciones elegantes y no intrusivas que informan al usuario de las acciones realizadas.

**Características**:
- 🎯 Aparecen en la esquina superior derecha
- 🎨 Diferentes colores según el tipo de acción:
  - ✅ Verde para éxito (curso añadido)
  - ⚠️ Amarillo para advertencias (curso eliminado)
  - ℹ️ Azul para información (modo oscuro, carrito vaciado)
- ⏱️ Desaparecen automáticamente después de 3 segundos
- 📱 Totalmente responsive

**Tipos de notificaciones**:
- "Curso añadido al carrito ✓" (success)
- "Curso eliminado del carrito" (warning)
- "Carrito vaciado" (info)
- "Modo oscuro activado/desactivado" (info)

**Código relevante**: `js/app8.js` - función `mostrarNotificacion()`
**Estilos**: `css/custom.css` - clase `.toast-notification`

---

### 5️⃣ **Modo Oscuro (Dark Mode)**

**Descripción**: Toggle para cambiar entre tema claro y oscuro con persistencia en navegación.

**Características**:
- 🌙 Botón flotante en esquina inferior derecha
- 🎨 Paleta de colores optimizada para lectura nocturna
- 💾 Preferencia guardada en LocalStorage
- 🔄 Transiciones suaves entre temas
- 🌓 Iconos intuitivos: 🌙 para activar, ☀️ para desactivar

**Elementos adaptados en modo oscuro**:
- Fondo principal: Negro suave (#1a1a1a)
- Tarjetas de cursos: Gris oscuro (#2d2d2d)
- Textos: Blanco/gris claro para mejor contraste
- Header y footer adaptados
- Carrito y modales
- Formulario de búsqueda

**Cómo usarlo**:
1. Haz clic en el botón flotante 🌙/☀️
2. El tema cambia instantáneamente
3. Tu preferencia se guarda automáticamente

**Código relevante**: `js/app8.js` - funciones `inicializarDarkMode()` y `toggleDarkMode()`
**Estilos**: `css/custom.css` - selectores `body.dark-mode`

---

## 🎨 Mejoras Adicionales de UX/UI

### Animaciones y Transiciones
- **Hover en tarjetas**: Elevación con sombra al pasar el mouse
- **Botones**: Animación de clic con escala
- **Aparición de cursos**: Fade-in suave en búsquedas
- **Badge del carrito**: Pulso al actualizar

### Responsive Design
- ✅ Adaptación perfecta a móviles, tablets y desktop
- ✅ Notificaciones optimizadas para pantallas pequeñas
- ✅ Botón de modo oscuro reposicionado en móviles

### Accesibilidad
- 🎯 Atributos ARIA en botones
- 🔤 Contraste mejorado en modo oscuro
- 📱 Tamaños táctiles adecuados para móviles

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones, Grid, Flexbox, Variables CSS
- **JavaScript ES6+**: Arrow functions, destructuring, template literals, modules
- **LocalStorage API**: Persistencia de datos
- **Skeleton CSS**: Framework base responsive

---

## 📁 Estructura del Proyecto

```
proyecto4/
│
├── index.html              # Página principal
├── README.md              # Documentación (este archivo)
│
├── css/
│   ├── custom.css         # ⭐ Estilos personalizados + MEJORAS
│   ├── normalize.css      # Reset CSS
│   └── skeleton.css       # Framework CSS
│
├── js/
│   ├── app1.js - app7.js  # Versiones previas (referencia)
│   └── app8.js            # ⭐ VERSIÓN FINAL con todas las mejoras
│
└── img/                   # Recursos gráficos
    ├── logo.png
    ├── cart.png
    ├── curso1-9.jpg
    └── ...
```

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Abrir directamente
1. Descarga o clona el repositorio
2. Abre el archivo `index.html` en tu navegador

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con PHP
php -S localhost:8000

# Con Node.js (http-server)
npx http-server
```

Luego abre: `http://localhost:8000`

---

## 📸 Ejemplos de Uso

### Ejemplo 1: Búsqueda de cursos
```
1. Escribe "JavaScript" en el buscador
2. Verás solo el curso de JavaScript
3. Borra el texto para ver todos los cursos
```

### Ejemplo 2: Añadir al carrito
```
1. Haz clic en "Añadir al carrito" en cualquier curso
2. Aparecerá una notificación verde ✓
3. El badge del carrito se actualizará con animación
4. El total se calculará automáticamente
```

### Ejemplo 3: Modo oscuro
```
1. Haz clic en el botón 🌙 (esquina inferior derecha)
2. Todo el sitio cambiará al tema oscuro
3. Recarga la página - tu preferencia se mantiene
4. Haz clic en ☀️ para volver al modo claro
```

---

## 🎯 Buenas Prácticas Implementadas

### Código Limpio
- ✅ Nombres de variables descriptivos (`articulosCarrito`, `actualizarContadorCarrito`)
- ✅ Funciones pequeñas y específicas (principio de responsabilidad única)
- ✅ Comentarios claros organizados por secciones
- ✅ Código modular y reutilizable

### Sintaxis Moderna ES6+
```javascript
// Destructuring
const { imagen, titulo, precio, cantidad, id } = curso

// Arrow functions
const filtrarCursos = (e) => { ... }

// Template literals
row.innerHTML = `<td>${titulo}</td>`

// Spread operator
articulosCarrito = [...articulosCarrito, infoCurso]
```

### Manejo Eficiente de Eventos
- Event delegation para múltiples elementos
- Prevención de propagación de eventos
- Listeners organizados en función única

### Gestión de Estado
- LocalStorage para persistencia
- Estado sincronizado en tiempo real
- Validación de datos antes de guardar

---

## 🔄 Mejoras Futuras Sugeridas

Aunque el proyecto cumple todos los requisitos, aquí hay ideas para expandirlo:

1. **Sistema de favoritos**: Marcar cursos como favoritos
2. **Categorías y filtros avanzados**: Por precio, profesor, tecnología
3. **Carrito persistente con backend**: Sincronizar entre dispositivos
4. **Pasarela de pago simulada**: Checkout completo
5. **Sistema de calificaciones**: Permitir a usuarios valorar cursos
6. **Modo lista/cuadrícula**: Toggle de visualización
7. **Comparador de cursos**: Comparar hasta 3 cursos lado a lado

---

## 🐛 Verificación y Testing

### Checklist de funcionalidades ✅

- [x] Añadir cursos al carrito funciona correctamente
- [x] Eliminar cursos individuales funciona
- [x] Vaciar carrito completo funciona
- [x] Búsqueda en tiempo real filtra correctamente
- [x] Contador del carrito se actualiza
- [x] Total del carrito calcula bien
- [x] Notificaciones aparecen y desaparecen
- [x] Modo oscuro funciona y persiste
- [x] LocalStorage guarda y recupera datos
- [x] Responsive en móviles, tablets y desktop
- [x] No hay errores en consola del navegador
- [x] Todas las animaciones funcionan suavemente

### Probado en:
- ✅ Chrome 120+
- ✅ Firefox 121+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ Móviles (iOS y Android)

---

## 👨‍💻 Autor

**Alejandro Bravo Calderón**

Proyecto desarrollado como parte del curso de Desarrollo Web.
Todas las mejoras implementadas utilizan conocimientos adquiridos en el módulo de JavaScript.

---

## 📝 Notas de Desarrollo

### Proceso de implementación:

1. **Análisis del código original**: Se revisó `app1.js` a `app7.js` para entender la evolución
2. **Identificación de áreas de mejora**: Se detectaron 5 oportunidades clave
3. **Diseño de funcionalidades**: Se planificaron las mejoras con enfoque en UX
4. **Implementación progresiva**: Cada funcionalidad se añadió y probó individualmente
5. **Integración**: Se aseguró que todas las funciones trabajen en armonía
6. **Optimización**: Se refinaron animaciones y rendimiento
7. **Documentación**: Se creó esta guía completa

### Decisiones técnicas:

- **LocalStorage vs SessionStorage**: Se eligió LocalStorage para persistencia entre sesiones
- **Vanilla JS vs Framework**: Se mantuvo JavaScript puro para cumplir requisitos
- **CSS personalizado vs Librería**: Se extendió Skeleton con estilos custom para mantener control
- **Notificaciones propias vs Librería**: Se implementaron desde cero para aprendizaje y personalización

---

## 📄 Licencia

Este proyecto es con fines educativos. Libre uso para aprendizaje.

---

## 🙏 Agradecimientos

- IES Rafael Alberti - Centro Educativo
- Skeleton CSS - Framework base
- Profesores del módulo de Desarrollo Web

---

**¡Proyecto listo para evaluación! ✨**

Si tienes preguntas o sugerencias, no dudes en contactar.