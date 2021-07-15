// GLOBAL

myKey = "Jonathan";

// ONLOAD
window.onload = () => {
  // SPINNER
  const H = document.querySelector("#H");
  const cont1 = document.querySelector("#spinner");
  const grabCarrito = document.querySelector("#carrito-items");
  cont1.style.display = "none";
  H.classList.remove("overflow-hidden");
  grabCarrito.innerHTML = sessionStorage.getItem("cont");
  let productos = JSON.parse(sessionStorage.getItem("cart"));
  productos.forEach((arrayP) => {
    addP(arrayP);
  });
  let btnAnadir = document.querySelectorAll(".prenda");
  let btnStorage = JSON.parse(sessionStorage.getItem("btn"));
  btnStorage.forEach((btn) => {
    addId(parseInt(btn));
  });

  for (let i = 0; i < btnAnadir.length; i++) {
    arrJ[i] = parseInt(btnAnadir[i].id);
  }

  for (let i = 0; i < arrJ.length; i++) {
    indice = arrJ.indexOf(arrB[i]);
    if (indice != -1) {
      arrB[indice] = arrJ[indice];
    } else {
      arrB[i] = -1;
    }
  }

  for (let i = 0; i < arrB.length; i++) {
    if (arrB[i] != i) {
      arrB[i] = -1;
    }
  }

  for (let i = 0; i < arrJ.length; i++) {
    let existe = false;
    if (arrJ[i] === arrB[i]) {
      existe = true;
    }
    if (existe) {
      btnAnadir[i].classList.add("disabled");
      existe = false;
    }
  }
};

//POO;
const arrB = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
const arrJ = [];
const arrProduct = [];
const alert = document.querySelector(".alert");

class Product {
  constructor(name, price, id) {
    this._name = name;
    this._price = price;
    this._id = id;
  }
}

class generarID {
  constructor(id) {
    this._id = id;
  }
}

class addProducts {
  addProduct(product) {
    arrProduct.push(product);
    sessionStorage.setItem("cart", JSON.stringify(arrProduct));
  }
}

class addIDs {
  addID(id) {
    arrB[id] = id;
    sessionStorage.setItem("btn", JSON.stringify(arrB));
  }
}

let addId = (id) => {
  const addID = new addIDs();
  addID.addID(id);
};

let addP = (product) => {
  const addProduct = new addProducts();
  addProduct.addProduct(product);
};

let deleteProduct = (productID) => {
  let productos = JSON.parse(sessionStorage.getItem("cart"));
  let index = productos.findIndex((elements) => elements._id == productID);
  productos.splice(index, 1);
  let trasf = JSON.stringify(productos);
  sessionStorage.setItem("cart", trasf);
};

let addNumItem = () => {
  sessionStorage.setItem("cont", Number(sessionStorage.getItem("cont")) + 1);
  const grabCarrito = document.querySelector("#carrito-items");
  grabCarrito.innerHTML++;
};

let delayAlert = () => {
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
  alert.style.display = "flex";
};

let insert = (e) => {
  let id = Math.random() * 10;
  const btn = e.target;
  btn.classList.add("disabled");
  const divNamePrice = e.target.parentElement.parentElement;
  const price = divNamePrice.querySelector(".price");
  const name = divNamePrice.querySelector(".name");
  const product = new Product(name.textContent, price.textContent, id);
  addP(product);
  addId(parseInt(btn.id));
  addNumItem();
  delayAlert();
};

const btn = document
  .querySelectorAll(".prenda")
  .forEach((btn) => btn.addEventListener("click", insert));

//SHOW CART
const grabModal = document.querySelector("#modalCarrito");
const grabTexto = document.querySelector("#modalTexto");

let agregarCarrito = () => {
  btnPress = JSON.parse(sessionStorage.getItem("btn"));
  btnPress.forEach((btn) => {
    console.log(btn);
  });
  let total = 0;
  const price = document.createElement("p");
  grabModal.style.display = "flex";
  grabTexto.innerText = "";
  price.className = "text-center";
  arrProduct.forEach((prod) => {
    let father = document.createElement("div");
    let myicon = document.createElement("i");
    let image = document.createElement("img");
    image.src = "./img/example.jpg";
    image.classList.add("img-fluid", "d-inline-block", "img-thumbnail", "mt-2");
    image.style.width = "100px";
    myicon.classList.add("bi-x-lg", "ms-3", "text-danger", "fs-5");
    myicon.setAttribute("id", prod._name);
    father.setAttribute("id", prod._id);
    let nameModal = document.createElement("p");
    let costo = document.createElement("p");
    costo.style.display = "inline-block";
    nameModal.style.display = "inline-block";
    nameModal.innerHTML = `${prod._name}.`;
    costo.innerHTML = `Costo ${prod._price}`;
    father.appendChild(image);
    father.appendChild(nameModal);
    father.appendChild(costo);
    father.appendChild(myicon);
    grabTexto.appendChild(father);
    myicon.addEventListener("click", (e) => {
      let idDeX = e.target.id;
      btnCam = document.getElementsByClassName(idDeX)[0];
      btnCam.classList.remove("disabled");
      total = total - parseInt(prod._price);
      let ideano = father.id;
      deleteProduct(ideano);
      e.target.parentElement.remove();
      let encontrar = arrProduct.findIndex((prod) => prod._id == ideano);
      arrProduct.splice(encontrar, 1);
      sessionStorage.setItem(
        "cont",
        Number(sessionStorage.getItem("cont")) - 1
      );
      const grabCarrito = document.querySelector("#carrito-items");
      grabCarrito.innerHTML = arrProduct.length;
      price.innerHTML = `Total ${total}$`;
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

  $shoppingCartBottom.addEventListener("click", agregarCarrito);
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

    let url = `https://api.whatsapp.com/send?phone=${myKey}&text=Nombre: ${nombreForm} Mensaje: ${mensajeForm}`;
    window.open(url, "_blank");
  });
