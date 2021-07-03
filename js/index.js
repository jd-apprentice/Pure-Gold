window.onload = () => {
  const H = document.querySelector("#H");
  const cont1 = document.querySelector("#spinner");
  cont1.style.display = "none";
  H.classList.remove("overflow-hidden");
};

// Elementos de la tienda

var primerObjeto = {
  tipo: "Camisa",
  talle: "L",
  nombre: "Camisa floreada para mujer\n"
};

var segundoObjeto = {
  tipo: "Pantalon",
  talle: "S",
  nombre: "Vaquero corderito\n"
};

// Array elementos

let prendasRopa = [];

// Catalogo

function añadirCarrito1() {
  grabCarrito.innerText ++;
  prendasRopa.push(primerObjeto.nombre)
}

function añadirCarrito2() {
  grabCarrito.innerText ++;
  prendasRopa.push(segundoObjeto.nombre)
}

function mostrarModal() {
  grabModal.style.display = 'flex';
  grabTexto.innerText = `${prendasRopa} es tu producto en el carrito`;
}

function cerrar() {
  grabModal.style.display = 'none';
}

const bottonAñadir1 = document.getElementById('Prenda1');
const bottonAñadir2 = document.getElementById('Prenda2');
const modalX = document.getElementById('modalX');
const modalCerrar = document.getElementById('modalCerrar');

let grabTexto = document.getElementById('modalTexto');
let grabCarrito = document.getElementById('carrito-items');
let grabModal = document.getElementById('modalCarrito');
let grabBotton = document.getElementById('botton-carrito');

bottonAñadir1.addEventListener("click", añadirCarrito1);
bottonAñadir2.addEventListener("click", añadirCarrito2);
grabBotton.addEventListener("click", mostrarModal);
modalX.addEventListener("click", cerrar);
modalCerrar.addEventListener("click", cerrar);