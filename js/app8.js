// *** Variables ***
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
const buscador = document.querySelector('#buscador')
let articulosCarrito = []


// *** Listeners ***
cargarEventListeners()
function cargarEventListeners () {
    listaCursos.addEventListener('click', añadirCurso)
    carrito.addEventListener('click', eliminarCurso)
    buscador.addEventListener('keyup', filtrarCursos)

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []
        carritoHTML()
        inicializarDarkMode()
    })

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []
        limpiarHTML()
        sincronizarLocalStorage()
        mostrarNotificacion('Carrito vaciado', 'info')
    })
}


// *** Funciones ***

// Función para añadir cursos al carrito
function añadirCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement
        leerDatosCurso(curso)
        
        // Animación al añadir
        animarBoton(e.target)
        mostrarNotificacion('Curso añadido al carrito ✓', 'success')
    }
}

// Elimina cursos del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        carritoHTML()
        mostrarNotificacion('Curso eliminado del carrito', 'warning')
    }
}

// Lee la información del curso seleccionado
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Verificar si el curso ya existe
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
            }
            return curso
        })
        articulosCarrito = [...cursos]
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    carritoHTML()
}

// Muestra el carrito en el HTML
function carritoHTML() {
    limpiarHTML()
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `
        contenedorCarrito.appendChild(row)
    })

    // Actualizar total y contador
    actualizarTotalCarrito()
    actualizarContadorCarrito()
    sincronizarLocalStorage()
}
// Limpia el HTML (tbody)
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
// Guardar el carrito en localStorage
function sincronizarLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}

// *** NUEVAS FUNCIONALIDADES ***

// 1. BUSCADOR/FILTRO DE CURSOS EN TIEMPO REAL
function filtrarCursos(e) {
    const textoFiltro = e.target.value.toLowerCase()
    const cursos = document.querySelectorAll('.card')
    
    cursos.forEach(curso => {
        const titulo = curso.querySelector('h4').textContent.toLowerCase()
        const profesor = curso.querySelector('p').textContent.toLowerCase()
        
        if (titulo.includes(textoFiltro) || profesor.includes(textoFiltro)) {
            curso.parentElement.style.display = 'block'
            // Animación de aparición
            curso.style.animation = 'fadeIn 0.3s ease-in'
        } else {
            curso.parentElement.style.display = 'none'
        }
    })
    
    // Mostrar mensaje si no hay resultados
    verificarResultadosBusqueda(textoFiltro)
}

function verificarResultadosBusqueda(texto) {
    const cursosVisibles = Array.from(document.querySelectorAll('.card'))
        .filter(card => card.parentElement.style.display !== 'none')
    
    const mensajeExistente = document.querySelector('.mensaje-sin-resultados')
    
    if (cursosVisibles.length === 0 && texto !== '') {
        if (!mensajeExistente) {
            const mensaje = document.createElement('div')
            mensaje.className = 'mensaje-sin-resultados'
            mensaje.innerHTML = '<p>❌ No se encontraron cursos que coincidan con tu búsqueda</p>'
            listaCursos.appendChild(mensaje)
        }
    } else if (mensajeExistente) {
        mensajeExistente.remove()
    }
}

// 2. CONTADOR VISUAL DEL CARRITO
function actualizarContadorCarrito() {
    const totalArticulos = articulosCarrito.reduce((total, curso) => total + curso.cantidad, 0)
    
    // Buscar o crear el badge contador
    let badge = document.querySelector('.carrito-badge')
    if (!badge) {
        badge = document.createElement('span')
        badge.className = 'carrito-badge'
        const imgCarrito = document.querySelector('#img-carrito')
        imgCarrito.parentElement.style.position = 'relative'
        imgCarrito.parentElement.appendChild(badge)
    }
    
    badge.textContent = totalArticulos
    badge.style.display = totalArticulos > 0 ? 'flex' : 'none'
    
    // Animación de pulso al actualizar
    badge.classList.add('pulse-animation')
    setTimeout(() => badge.classList.remove('pulse-animation'), 300)
}

// 3. TOTAL DEL CARRITO
function actualizarTotalCarrito() {
    const total = articulosCarrito.reduce((sum, curso) => {
        const precio = parseFloat(curso.precio.replace('€', ''))
        return sum + (precio * curso.cantidad)
    }, 0)
    
    // Buscar o crear elemento de total
    let totalElement = document.querySelector('.total-carrito')
    if (!totalElement) {
        totalElement = document.createElement('div')
        totalElement.className = 'total-carrito'
        const tablaCarrito = document.querySelector('#lista-carrito')
        tablaCarrito.parentElement.insertBefore(totalElement, vaciarCarritoBtn)
    }
    
    totalElement.innerHTML = `
        <strong>Total: ${total.toFixed(2)}€</strong>
        <p class="subtotal">Artículos: ${articulosCarrito.reduce((t, c) => t + c.cantidad, 0)}</p>
    `
}

// 4. SISTEMA DE NOTIFICACIONES TOAST
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div')
    notificacion.className = `toast-notification ${tipo}`
    
    const iconos = {
        success: '✓',
        warning: '⚠',
        info: 'ℹ',
        error: '✕'
    }
    
    notificacion.innerHTML = `
        <span class="toast-icon">${iconos[tipo]}</span>
        <span class="toast-message">${mensaje}</span>
    `
    
    document.body.appendChild(notificacion)
    
    // Animación de entrada
    setTimeout(() => notificacion.classList.add('show'), 10)
    
    // Auto-eliminar después de 3 segundos
    setTimeout(() => {
        notificacion.classList.remove('show')
        setTimeout(() => notificacion.remove(), 300)
    }, 3000)
}

// 5. MODO OSCURO (DARK MODE)
function inicializarDarkMode() {
    const darkModeGuardado = localStorage.getItem('darkMode') === 'true'
    
    // Crear botón de toggle si no existe
    let toggleBtn = document.querySelector('.dark-mode-toggle')
    if (!toggleBtn) {
        toggleBtn = document.createElement('button')
        toggleBtn.className = 'dark-mode-toggle'
        toggleBtn.innerHTML = '🌙'
        toggleBtn.setAttribute('aria-label', 'Cambiar modo oscuro')
        document.body.appendChild(toggleBtn)
        
        toggleBtn.addEventListener('click', toggleDarkMode)
    }
    
    if (darkModeGuardado) {
        document.body.classList.add('dark-mode')
        toggleBtn.innerHTML = '☀️'
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode')
    const isDarkMode = document.body.classList.contains('dark-mode')
    
    localStorage.setItem('darkMode', isDarkMode)
    
    const toggleBtn = document.querySelector('.dark-mode-toggle')
    toggleBtn.innerHTML = isDarkMode ? '☀️' : '🌙'
    
    mostrarNotificacion(
        isDarkMode ? 'Modo oscuro activado 🌙' : 'Modo claro activado ☀️',
        'info'
    )
}

// ANIMACIÓN DE BOTÓN
function animarBoton(boton) {
    boton.classList.add('btn-clicked')
    setTimeout(() => boton.classList.remove('btn-clicked'), 300)
}

