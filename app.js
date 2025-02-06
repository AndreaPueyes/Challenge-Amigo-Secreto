// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoNombres =[]

//recibir el nombre dado al dar click al boton
function agregarAmigo(){
    let nombre = document.getElementById("amigo")
    listadoNombres.push(nombre.value)
    nombre.value = ""
    console.log(listadoNombres)
    listaDeNombres ()
    
}
// MOSTRAR listado de nombres
function listaDeNombres (){
   let lista = document.querySelector(".result-list");
   let tituloLista = document.querySelector(".name-list")
   tituloLista.innerHTML = "Listado de amigos para sortear:"
   lista.innerHTML = ` ${listadoNombres}`;
}

//Sorteo amigo Secreto
function sortearAmigo(){
    let amigoSecreto = listadoNombres[Math.floor(Math.random()*listadoNombres.length)]
    alert(`Su amigo secreto es: ${amigoSecreto}`)
}