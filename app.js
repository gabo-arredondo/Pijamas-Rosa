// app.js

// Selección de elementos
const openModalBtn = document.getElementById('open-modal')
const closeModalBtn = document.getElementById('close-modal')
const modal = document.getElementById('contact-modal')

// Abrir el modal
openModalBtn.addEventListener('click', (e) => {
  e.preventDefault() // Evita el comportamiento predeterminado del enlace
  modal.style.display = 'flex'
})

// Cerrar el modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})
