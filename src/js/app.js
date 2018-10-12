const enviarMensaje = document.getElementById('btnEnviar').addEventListener('click', () => {
  //guarda texto
  let texto = document.getElementById('mensaje').value;
  //limpia caja de texto
  //print texto
  document.getElementById('posteo').innerHTML = texto;
  
  document.getElementById('texto').value = ' ';
});


