let url = 'http://localhost:5000/amigos/'
let lista = document.querySelector('#lista')
let inputVer = document.querySelector('#input')
let inputDelete = document.querySelector('#inputDelete')
let espacio = document.querySelector('#amigo')
let save = document.querySelector('#inputDelete')
let Exitoso = document.querySelector('#success')
let mensaje = document.createElement('span')



$('#boton').click(verAmigos)
$('#search').click(verUnAmigo)
$('#delete').click(borrarUnAmigo)

function verAmigos() {
  lista.innerHTML = ''
  fetch(url)
    .then(res => res.json())
    .then(amigos => {
      if (amigos.length === 0) {
        mensaje.innerText = 'no hay mas amigos'
        lista.appendChild(mensaje)
      } else {
        amigos.forEach(XD => {
          lista.innerHTML = lista.innerHTML + `<li>${XD.name}</li>`
        })
      }
    })
};

function verUnAmigo() { 
    fetch(url + inputVer.value)
    .then(res => res.json())
    .then(amigo => {
        espacio.innerText = amigo.name
        inputVer.value = '';   
    })      
}

function borrarUnAmigo() {
  fetch(url + inputDelete.value, { method: 'DELETE' })
    .then(res => res.json())
    .then(()=> {
        Exitoso.innerText = 'Se elimino con exito'
        inputDelete.value = ''
        verAmigos();
    })
}