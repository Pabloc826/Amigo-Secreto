// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


let nombreDeAmigosSecretos = [];
let nombresYaElegidos = []


function agregarAmigo(){
    let nombredeUsuario = document.getElementById('amigo').value.trim()

    if(nombredeUsuario == '') {
        alert('Por favor, ingrese un nombre');
        return limpiarCaja ();
    }
    nombreDeAmigosSecretos.push(nombredeUsuario);
    listaDeAmigos()
    limpiarCaja();
    console.log(nombreDeAmigosSecretos);
};

function limpiarCaja() {
    document.getElementById('amigo'). value = '';
};

function listaDeAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''

    for(let i=0; i<nombreDeAmigosSecretos.length; i++) {
        lista.innerHTML += "<li>" + nombreDeAmigosSecretos[i] + "</li>"
    };
};
listaDeAmigos()


function sortearAmigo() {
    if(nombreDeAmigosSecretos.length === 0) {
        alert('No hay amigos para sortear')
        return;
    };

    let nombreGenerado = Math.floor(Math.random()*nombreDeAmigosSecretos.length);
    
    let amigoSecreto = document.querySelector('#resultado');
    amigoSecreto.innerHTML = `Tu amigo secreto es ${nombreDeAmigosSecretos[nombreGenerado]}`

    let nombreSorteado = nombreDeAmigosSecretos[nombreGenerado]
    nombresYaElegidos.push(nombreDeAmigosSecretos[nombreGenerado])
    nombreDeAmigosSecretos.splice(nombreGenerado, 1)

     mostrarNombresYaElegidos()

};
    
function mostrarNombresYaElegidos() {
    listaDeNombres = document.getElementById('nombresSorteados');
    listaDeNombres.innerHTML = ''
    listaDeNombres.innerHTML += '<li>' + 'Nombres sorteados' + '</li>'

    for(let i = 0; i<nombresYaElegidos.length; i++) {
        listaDeNombres.innerHTML += "<li>" + nombresYaElegidos[i] + "</li>"
        };
}