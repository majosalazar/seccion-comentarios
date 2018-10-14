firebase.initializeApp({
  apiKey: "AIzaSyC3L3m1eSW4wkZg3VW-6M-Nw5NrZlmrHo8",
  authDomain: "comentarios-8896b.firebaseapp.com",
  projectId: "comentarios-8896b"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//agregar mensajes 
function enviar () {
  //guarda texto
  let texto = document.getElementById('mensaje').value;

  db.collection("mensajes").add({
    mensaje: texto
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    //limpia caja de texto
    document.getElementById('mensaje').value = ' ';
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};

//ver mansajes 
let mostrarMensajes = document.getElementById('posteo');

db.collection("mensajes").onSnapshot((querySnapshot) => {
  posteo.innerHTML = ' ';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().mensaje}`);
    posteo.innerHTML += `
    <div>
      <p>${doc.data().mensaje}</p>
      <button onclick="eliminar('${doc.id}')">eliminar</button>
    </div>
    `
  });
});

//borrar mensaje
function eliminar (id) {
  db.collection("mensajes").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });

}



/*
const enviarMensaje = document.getElementById('btnEnviar').addEventListener('click', () => {
 
  //print texto
  document.getElementById('posteo').innerHTML = texto;
  
*/