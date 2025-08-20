# Amigo-Secreto
Implementación del challenge "Amigo secreto" en AluraLatam

Descripción sobre lo hecho:

- La función ```agregarAmigo``` comienza todo, lo que realiza dicha función es:

1- Tiene la variable ```nombreUsuario``` que conecta una parte del HTML con la parte de JavaScript.

2- El usuario puede escribir la cantidad de nombres que quiera, ya que el array llamado ```nombreDeAmigosSecretos []``` está vacío.

3- Hay una condición en la que si el usuario no escribe nada y clickea agregar, aparecerá una alerta "Por favor, ingrese un nombre".

4- Cada vez que el usuario agrega un nombre, el array se ira llenando.

- La función ```limpiarCaja``` realiza el trabajo de limpiar la parte en donde se ponen los nombres cada vez que se agregan al array.

- La función ```listaDeAmigos```agrega todos los nombres que el usuario mete al array mediante ```for```. En ella se conecta otra parte del HTML con el código de JavaScript.

- La función ```sortearAmigo``` contiene la última conexión de JavaScript a HTML. Esta función hace que, a travez de ```Math.floor(Math.random()*nombreDeAmigosSecretos.length)``` salga un nombre del array de forma al azar. A su vez, si el array esta vacío y el usuario clickea "sortear amigo" le aparecerá un ```alert``` que da a entender que no hay amigos para sortear.


https://github.com/user-attachments/assets/1dbdddb0-24a3-42dd-bc9e-0e0d5bfa2a7e


✅ COSAS AGREGADAS
- Una función que muestra los nombres ya sorteados.
- Un alert diciendo que ya no hay más nombres para sortear.
- Un botón de "Nuevo juego" que limpie todo y puedas empezar nuevamente.




