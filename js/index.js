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

let agregarCarrito = () => {
  let total = 0;
    const br = document.createElement("br");
    const price = document.createElement("p");
    const myicon = document.createElement("i");
    myicon.classList.add("bi-x-lg", "ms-4", "text-danger");
    grabModal.style.display = "flex";
    grabTexto.innerText = "";
    arrProduct.forEach((prod) => {
      grabTexto.innerText += `${prod._name} Se anadio al carrito. Costo${prod._price}`;
      grabTexto.in(myicon); // Necesita arreglos
      grabTexto.appendChild(br);
      total += parseInt(prod._price);
    });
    price.innerHTML = `Total ${total}$`;
    grabTexto.appendChild(price);
}

const shoppingCart = document.querySelector("#botton-carrito").addEventListener("click", agregarCarrito) 

// CLOSE CART
const modalX = document
  .getElementById("modalX")
  .addEventListener("click", () => (grabModal.style.display = "none"));
const modalCerrar = document
  .getElementById("modalCerrar")
  .addEventListener("click", () => (grabModal.style.display = "none"));

// CART BOTTOM

const $shoppingCartBottom = document.querySelector('#carritoBottom');
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 98) {
    carritoBottom.style.display = "block";
  } else {
    carritoBottom.style.display = "none";
  }

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop < 98) {
    grabModal.style.display = "none";
  }
})  

  $shoppingCartBottom.addEventListener("click", () => {
    agregarCarrito();
  })

})

// WHATSAPP BUTTON

const grabModalWSP = document.querySelector('#modalWSP');
const grabFormWSP = document.querySelector('#formWSP');
const grabWhatsapp = document.querySelector('#whatsapp').addEventListener('click', () => (grabModalWSP.style.display = 'flex'));

const grabXWSP = document
.querySelector('#xWSP')
.addEventListener('click', () => (grabModalWSP.style.display = 'none'));
const grabCerrarWSP = document
.querySelector('#cerrarWSP')
.addEventListener('click', () => (grabModalWSP.style.display = 'none'));
const grabEnviarWSP = document
.querySelector('#enviarWSP')
.addEventListener('click', () => {

  let nombreForm = document.querySelector('#inputNombre').value;
  let mensajeForm = document.querySelector('#inputMensaje').value;

  let url =`https://api.whatsapp.com/send?phone=541123882740&text=Nombre: ${nombreForm} Mensaje: ${mensajeForm}`;
  window.open(url, '_blank');
});