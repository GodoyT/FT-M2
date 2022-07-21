$( "#boton" ).click(function() {
    
    $.get('http://localhost:5000/amigos/', function(data){
        for (let i = 0; i < data.length; i++){
            let nombre = document.createElement('li')
            nombre.setAttribute('id', `${i + 1}`)
            nombre.innerText = data[i].name
            let lugar = document.querySelector('#lista')
            lugar.appendChild(nombre)

        }
    })
  });

  $('#search').click(function(){
    let save = document.querySelector('#input')
    $.get(`http://localhost:5000/amigos/${save.value}`, function(data){
        let text = document.querySelector('#amigo')
        text.innerText = data.name;
    })
  })

  $('#delete').click(function(){
    let save = document.querySelector('#inputDelete')
    $('#'+save.value).remove()
    let mensaje = document.createElement('span')
    let lugar = document.querySelector('#success')
    mensaje.innerText = 'tu amigo se borro con exito'
    lugar.appendChild(mensaje)
  })