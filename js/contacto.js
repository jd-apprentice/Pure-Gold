  // FIREBASE
  window.onload = async () => {
    const obtenerDatos = () => bd.collection('Datos').get();
    const querySnapshot = await obtenerDatos();
    querySnapshot.forEach(doc => {
      tel = doc.data()
    })
    // SPINNER
    const H = document.querySelector("#H");
    const cont1 = document.querySelector("#spinner");
    cont1.style.display = "none";
    H.classList.remove("overflow-hidden");
  };

  // GLOBALS

  const bd = firebase.firestore();
  let tel = 0;

  // URLs

  const urlFacebook = "https://www.facebook.com/puregoldferia";
  const urlInstagram = "http://instagram.com/puregoldFeria";

  // BUTTONS

  const grabFace = document
    .querySelector("#btnFacebook")
    .addEventListener("click", () => window.open(urlFacebook));

  const grabWhatsapp = document
    .querySelector("#btnWhatsApp")
    .addEventListener("click", () => {
      let urlWhatsapp = `https://api.whatsapp.com/send?phone=${tel.SELLER}`;
      window.open(urlWhatsapp);
    });

  const grabInstagram = document
    .querySelector("#btnInstagram")
    .addEventListener("click", () => window.open(urlInstagram));

  const sendEmail = document
    .querySelector("#btnGmail")
    .addEventListener("click", () => {
      const emailTo = "mailto:Puregoldferia@gmail.com";
      document.location.href = emailTo;
    });