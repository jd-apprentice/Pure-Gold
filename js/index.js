// LOADING SPINNER
window.onload = () => {
  const H = document.querySelector("#H");
  const cont1 = document.querySelector("#spinner");
  const grabCarrito = document.querySelector("#carrito-items");
  cont1.style.display = "none";
  H.classList.remove("overflow-hidden");
  grabCarrito.innerHTML = localStorage.getItem("cont");
  let productos = JSON.parse(localStorage.getItem("cart"));
  productos.forEach((arrayP) => {
    addP(arrayP);
  });
};

//POO
const arrProduct = [];

class Product {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }
}

class addProducts {
  addProduct(product) {
    arrProduct.push(product);
    localStorage.setItem("cart", JSON.stringify(arrProduct));
  }
}
let addP = (product) => {
  const addProduct = new addProducts();
  addProduct.addProduct(product);
};

let addNumItem = () => {
  localStorage.setItem("cont", Number(localStorage.getItem("cont")) + 1);
  const grabCarrito = document.querySelector("#carrito-items");
  grabCarrito.innerHTML++;
};

let insert = (e) => {
  const divNamePrice = e.target.parentElement.parentElement;
  const price = divNamePrice.querySelector(".price");
  const name = divNamePrice.querySelector(".name");
  const product = new Product(name.textContent, price.textContent);
  addP(product);
  addNumItem();
};
const btn = document
  .querySelectorAll(".prenda")
  .forEach((btn) => btn.addEventListener("click", insert));

//SHOW CART
const grabModal = document.querySelector("#modalCarrito");
const grabTexto = document.querySelector("#modalTexto");

const shoppingCart = document
  .querySelector("#botton-carrito")
  .addEventListener("click", () => {
    let total = 0;
    const br = document.createElement("br");
    const price = document.createElement("p");
    price.style.margin = "10px";
    grabModal.style.display = "flex";
    grabTexto.innerText = "";
    arrProduct.forEach((prod) => {
      grabTexto.innerText += `${prod._name} Se anadio al carrito. Costo${prod._price}`;
      grabTexto.appendChild(br);
      total += parseInt(prod._price);
    });
    price.innerHTML = `Total ${total}$`;
    grabTexto.appendChild(price);
  });

// CLOSE CART
const modalX = document
  .getElementById("modalX")
  .addEventListener("click", () => (grabModal.style.display = "none"));
const modalCerrar = document
  .getElementById("modalCerrar")
  .addEventListener("click", () => (grabModal.style.display = "none"));

// // Elementos de la tienda

// var primerObjeto = {
//   tipo: "Camisa",
//   talle: "L",
//   nombre: "Camisa floreada para mujer\n",
// };

// var segundoObjeto = {
//   tipo: "Pantalon",
//   talle: "S",
//   nombre: "Vaquero corderito\n",
// };

// // Array elementos

// let prendasRopa = [];

// // Catalogo

// function añadirCarrito1() {
//   grabCarrito.innerText++;
//   prendasRopa.push(primerObjeto.nombre);
// }

// function añadirCarrito2() {
//   grabCarrito.innerText++;
//   prendasRopa.push(segundoObjeto.nombre);
// }

// function mostrarModal() {
//   grabModal.style.display = "flex";
//   grabTexto.innerText = `${prendasRopa} es tu producto en el carrito`;
// }

// function cerrar() {
//   grabModal.style.display = "none";
// }

// const bottonAñadir1 = document.getElementById("Prenda1");
// const bottonAñadir2 = document.getElementById("Prenda2");
// const modalX = document.getElementById("modalX");
// const modalCerrar = document.getElementById("modalCerrar");

// let grabTexto = document.getElementById("modalTexto");
// let grabCarrito = document.getElementById("carrito-items");
// let grabModal = document.getElementById("modalCarrito");
// let grabBotton = document.getElementById("botton-carrito");

// bottonAñadir1.addEventListener("click", añadirCarrito1);
// bottonAñadir2.addEventListener("click", añadirCarrito2);
// grabBotton.addEventListener("click", mostrarModal);
// modalX.addEventListener("click", cerrar);
// modalCerrar.addEventListener("click", cerrar);
