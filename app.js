let amigos = [];

function asignarContenido(selector, contenido) {
  let elem = document.querySelector(selector);
  if(elem){ elem.innerHTML = contenido; }
}

function esNumero(texto) {
  let num = parseInt(texto);
  if(num == texto){
    return true;
  } else {
   
    return false;
  }
}

function agregarAmigo(){
  let input = document.getElementById("amigo");
  let nombre = input.value; 
  if(nombre === ""){
    alert("Por favor, inserte un nombre.");
    return;
  }
  
  if(esNumero(nombre)){
    alert("No se permiten números.");
    input.value = "";
    return;
  }
  
  
  if(amigos.indexOf(nombre) !== -1){
    alert("El nombre ya existe en la lista.");
    input.value = "";
    return;
  }
  
  amigos.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista(){
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for(let i=0;i<amigos.length;i++){
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo(){
  if(amigos.length === 0){
    alert("No hay amigos para sortear.");
    return;
  }
  let indice = Math.floor(Math.random()*amigos.length);
  let amigoSorteado = amigos[indice];
  asignarContenido("#resultado","El amigo secreto es: "+amigoSorteado);
  
  amigos = [];
  actualizarLista();
}

function reiniciarTodo(){
  amigos = [];
  asignarContenido("#listaAmigos","");
  asignarContenido("#resultado","");
  document.getElementById("amigo").value = "";
}
