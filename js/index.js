// DOTENV - REQUIRE

var requirejs = require('requirejs');

requirejs.config({
  nodeRequire: require
});

require("dotenv").config();

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
  constructor(name, price, id) {
    this._name = name;
    this._price = price;
    this._id = id;
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

let deleteProduct = (productID) => {
  let productos = JSON.parse(localStorage.getItem("cart"));
  let index = productos.findIndex((elements) => elements._id == productID);
  productos.splice(index, 1);
  let trasf = JSON.stringify(productos);
  localStorage.setItem("cart", trasf);
};

let addNumItem = () => {
  localStorage.setItem("cont", Number(localStorage.getItem("cont")) + 1);
  const grabCarrito = document.querySelector("#carrito-items");
  grabCarrito.innerHTML++;
};

let insert = (e) => {
  let id = Math.random() * 10;
  const divNamePrice = e.target.parentElement.parentElement;
  const price = divNamePrice.querySelector(".price");
  const name = divNamePrice.querySelector(".name");
  const product = new Product(name.textContent, price.textContent, id);
  addP(product);
  addNumItem();
};

const btn = document
  .querySelectorAll(".prenda")
  .forEach((btn) => btn.addEventListener("click", insert));


//SHOW CART
const grabModal = document.querySelector("#modalCarrito");
const grabTexto = document.querySelector("#modalTexto");

let agregarCarrito = () => {
  let total = 0;
  const price = document.createElement("p");
  grabModal.style.display = "flex";
  grabTexto.innerText = "";
  price.className = "text-center";
  arrProduct.forEach((prod) => {
    let father = document.createElement("div");
    let myicon = document.createElement("i");
    myicon.classList.add("bi-x-lg", "ms-3", "text-danger", "fs-5");
    father.setAttribute("id", prod._id);
    let text = document.createElement("p");
    text.style.display = "inline-block";
    text.innerHTML = `${prod._name} Se anadio al carrito. Costo${prod._price}`;
    father.appendChild(text);
    father.appendChild(myicon);
    grabTexto.appendChild(father);
    myicon.addEventListener("click", (e) => {
      let ideano = father.id;
      deleteProduct(ideano);
      e.target.parentElement.remove();
      let encontrar = arrProduct.findIndex((prod) => prod._id == ideano);
      arrProduct.splice(encontrar, 1);
      console.log(ideano);
    });
    total += parseInt(prod._price);
  });
  price.innerHTML = `Total ${total}$`;
  grabTexto.appendChild(price);
};

const shoppingCart = document
  .querySelector("#botton-carrito")
  .addEventListener("click", agregarCarrito);

// CLOSE CART
const modalX = document
  .getElementById("modalX")
  .addEventListener("click", () => (grabModal.style.display = "none"));
const modalCerrar = document
  .getElementById("modalCerrar")
  .addEventListener("click", () => (grabModal.style.display = "none"));

// CART BOTTOM

const $shoppingCartBottom = document.querySelector("#carritoBottom");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 98) {
    carritoBottom.style.display = "flex";
  } else {
    carritoBottom.style.display = "none";
  }

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop < 98) {
      grabModal.style.display = "none";
    }
  });

  $shoppingCartBottom.addEventListener("click", () => {
    agregarCarrito();
  });
});

// WHATSAPP BUTTON

const grabModalWSP = document.querySelector("#modalWSP");
const grabFormWSP = document.querySelector("#formWSP");
const grabWhatsapp = document
  .querySelector("#whatsapp")
  .addEventListener("click", () => (grabModalWSP.style.display = "flex"));

const grabXWSP = document
  .querySelector("#xWSP")
  .addEventListener("click", () => (grabModalWSP.style.display = "none"));
const grabCerrarWSP = document
  .querySelector("#cerrarWSP")
  .addEventListener("click", () => (grabModalWSP.style.display = "none"));
const grabEnviarWSP = document
  .querySelector("#enviarWSP")
  .addEventListener("click", () => {
    let nombreForm = document.querySelector("#inputNombre").value;
    let mensajeForm = document.querySelector("#inputMensaje").value;

    let url = `https://api.whatsapp.com/send?phone=541123882740&text=Nombre: ${nombreForm} Mensaje: ${mensajeForm}`;
    window.open(url, "_blank");
  });
