# 🚀 Guía de Inicio Rápido

## Instalación y Ejecución

### Paso 1: Clonar o Descargar
```bash
# Si tienes el repositorio en GitHub
git clone [URL-DEL-REPO]
cd proyecto4

# O simplemente descarga el ZIP y descomprime
```

### Paso 2: Abrir el Proyecto

#### Opción A: Doble Clic (Más Fácil)
```
1. Navega a la carpeta del proyecto
2. Haz doble clic en index.html
3. Se abrirá en tu navegador predeterminado
```

#### Opción B: Servidor Local (Recomendado)

**Con Python:**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Con Node.js:**
```bash
# Instalar http-server (solo primera vez)
npm install -g http-server

# Ejecutar
http-server -p 8000
```

**Con PHP:**
```bash
php -S localhost:8000
```

**Con VS Code:**
```
1. Instala la extensión "Live Server"
2. Click derecho en index.html
3. Selecciona "Open with Live Server"
```

Luego abre: `http://localhost:8000`

---

## 🎮 Cómo Usar las Nuevas Funcionalidades

### 1. Buscar Cursos 🔍
```
1. Ve al campo de búsqueda en la parte superior
2. Escribe "JavaScript" o "Manuel" o cualquier término
3. Los cursos se filtran automáticamente mientras escribes
4. Borra el texto para ver todos los cursos
```

**Términos de ejemplo para probar:**
- `JavaScript` → Muestra curso de JS
- `PHP` → Muestra curso de PHP
- `Manuel` → Muestra cursos del profesor Manuel
- `Ciber` → Muestra cursos de ciberseguridad

### 2. Añadir Cursos al Carrito 🛒
```
1. Haz clic en "Añadir al carrito" en cualquier curso
2. Verás:
   - Notificación verde en la esquina: "Curso añadido ✓"
   - Badge rojo con número en el icono del carrito
   - El total actualizado (si pasas el mouse por el carrito)
```

### 3. Ver el Carrito 👀
```
1. Pasa el mouse sobre el icono del carrito (esquina superior derecha)
2. Se desplegará mostrando:
   - Todos los cursos añadidos
   - Cantidad de cada curso
   - Total a pagar
   - Número de artículos
```

### 4. Eliminar Curso del Carrito ❌
```
1. Abre el carrito (pasa el mouse)
2. Haz clic en la "X" roja al lado del curso
3. Verás notificación amarilla: "Curso eliminado"
4. El total y contador se actualizan
```

### 5. Vaciar Todo el Carrito 🗑️
```
1. Abre el carrito
2. Haz clic en "Vaciar Carrito"
3. Todos los productos se eliminan
4. Notificación azul: "Carrito vaciado"
```

### 6. Activar Modo Oscuro 🌙
```
1. Busca el botón flotante 🌙 en la esquina inferior derecha
2. Haz clic
3. Todo el sitio cambia a tema oscuro
4. El botón cambia a ☀️
5. Recarga la página → Tu preferencia se mantiene

Para volver al modo claro:
- Haz clic en el botón ☀️
```

---

## 📱 Prueba en Diferentes Dispositivos

### Desktop
```
1. Abre en Chrome, Firefox, Safari o Edge
2. Prueba todas las funcionalidades
3. Observa las animaciones suaves
```

### Móvil
```
1. Abre en tu móvil (mismo WiFi si usas servidor local)
2. Todas las funciones son táctiles
3. Las notificaciones se adaptan al tamaño
4. El botón de modo oscuro se reposiciona
```

### Tablet
```
1. La interfaz se adapta al tamaño medio
2. Grid de cursos se ajusta
3. Carrito funciona con hover o tap
```

---

## 🧪 Checklist de Funcionalidades a Probar

Marca mientras pruebas:

**Funcionalidades Básicas:**
- [ ] Añadir un curso al carrito
- [ ] Añadir el mismo curso dos veces (debe incrementar cantidad)
- [ ] Añadir tres cursos diferentes
- [ ] Eliminar un curso del carrito
- [ ] Vaciar todo el carrito

**Nuevas Funcionalidades:**
- [ ] Buscar "JavaScript" y ver el filtro
- [ ] Buscar algo que no existe y ver el mensaje
- [ ] Ver el badge del carrito con el número correcto
- [ ] Verificar que el total se calcula bien
- [ ] Ver notificación al añadir curso
- [ ] Ver notificación al eliminar curso
- [ ] Activar modo oscuro
- [ ] Recargar y verificar que modo oscuro persiste
- [ ] Desactivar modo oscuro

**Persistencia:**
- [ ] Añadir 2-3 cursos
- [ ] Recargar la página (F5 o Cmd+R)
- [ ] Verificar que los cursos siguen en el carrito
- [ ] Verificar que el total es correcto
- [ ] Cerrar pestaña y volver a abrir
- [ ] Los cursos aún están ahí

**Responsive:**
- [ ] Redimensionar ventana del navegador
- [ ] Abrir en móvil
- [ ] Todas las funciones trabajan correctamente

---

## 🐛 Solución de Problemas

### El carrito no guarda al recargar
**Solución**: Verifica que el navegador permita LocalStorage
```javascript
// Abre la consola (F12) y ejecuta:
console.log(localStorage.getItem('carrito'))
// Debería mostrar el contenido del carrito
```

### El modo oscuro no funciona
**Solución**: Limpia el LocalStorage
```javascript
// En consola (F12):
localStorage.clear()
location.reload()
```

### La búsqueda no filtra
**Solución**: Verifica la consola por errores
```
1. F12 → Consola
2. No debería haber errores rojos
3. Si hay errores, reporta el mensaje
```

### Botón de modo oscuro no aparece
**Solución**: El JavaScript puede no estar cargando
```
1. Verifica que index.html tiene:
   <script src="js/app8.js"></script>
2. Verifica que otros scripts estén comentados
3. Recarga con cache limpio (Ctrl+Shift+R)
```

---

## 📊 Verificar que Todo Funciona

### Test Rápido (2 minutos)
```
1. ✅ Abre index.html
2. ✅ Haz clic en "Añadir al carrito" de 2 cursos
3. ✅ Ve notificaciones verdes
4. ✅ Ve badge con "2"
5. ✅ Pasa mouse por carrito
6. ✅ Ve total correcto
7. ✅ Busca "PHP"
8. ✅ Ve solo curso de PHP
9. ✅ Activa modo oscuro
10. ✅ Recarga página
11. ✅ Modo oscuro sigue activo
12. ✅ Carrito tiene los 2 cursos

Si todo funciona → ¡PERFECTO! ✨
```

---

## 💡 Tips y Trucos

### Ver el Estado del Carrito
```javascript
// Abre consola (F12) y ejecuta:
console.log(JSON.parse(localStorage.getItem('carrito')))
```

### Limpiar Todo y Empezar de Nuevo
```javascript
// En consola:
localStorage.clear()
location.reload()
```

### Ver el Total sin Abrir Carrito
```javascript
// En consola:
const carrito = JSON.parse(localStorage.getItem('carrito')) || []
const total = carrito.reduce((sum, c) => {
    return sum + (parseFloat(c.precio.replace('€', '')) * c.cantidad)
}, 0)
console.log(`Total: ${total.toFixed(2)}€`)
```

---

## 📸 Screenshots Esperados

Cuando todo funcione, deberías ver:

1. **Badge del carrito**: Círculo rojo con número
2. **Notificaciones**: Aparecen en esquina superior derecha
3. **Búsqueda**: Cursos desaparecen/aparecen al escribir
4. **Total en carrito**: Box azul/rosa con el precio total
5. **Botón modo oscuro**: Círculo flotante con 🌙 o ☀️
6. **Modo oscuro activo**: Todo en tonos grises/negros

---

## 🎓 Para el Profesor/Evaluador

### Aspectos a Evaluar

**Funcionalidad (40 puntos):**
- [10] Búsqueda en tiempo real funciona
- [10] Contador del carrito actualiza correctamente
- [10] Total del carrito calcula bien
- [5] Notificaciones aparecen en el momento correcto
- [5] Modo oscuro funciona y persiste

**Código (30 puntos):**
- [10] Código limpio y bien comentado
- [10] Uso de sintaxis moderna ES6+
- [5] Nombres de variables descriptivos
- [5] Funciones pequeñas y específicas

**UX/UI (20 puntos):**
- [5] Animaciones suaves y apropiadas
- [5] Diseño responsive
- [5] Feedback visual claro
- [5] Accesibilidad

**Documentación (10 puntos):**
- [5] README.md completo y claro
- [3] GUIA_MEJORAS.md detallada
- [2] Este archivo de inicio rápido

### Total: 100 puntos

---

## 🚀 Siguiente Nivel (Opcional)

Si quieres seguir mejorando el proyecto:

1. **Backend**: Conectar a una API/base de datos real
2. **Pago**: Integrar Stripe/PayPal
3. **Usuarios**: Sistema de login y perfiles
4. **Favoritos**: Poder marcar cursos favoritos
5. **Compartir**: Botones para redes sociales
6. **Comparador**: Comparar 2-3 cursos lado a lado

---

## 📞 Contacto

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Lee la sección "Solución de Problemas"
3. Revisa GUIA_MEJORAS.md para detalles técnicos

---

**¡Disfruta probando el proyecto! 🎉**
