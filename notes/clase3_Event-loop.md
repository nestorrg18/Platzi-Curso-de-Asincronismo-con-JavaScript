## 🌀 𝗖𝗹𝗮𝘀𝗲 #𝟯: 𝗘𝘃𝗲𝗻𝘁 𝗟𝗼𝗼𝗽 𝟯/𝟮𝟭 🌀

📌 Para entender el Event Loop, en el siguiente GIF (fuente: aquí) se muestra que la primera tarea asignada (mostrar por Consola la palabra: “start”) pasa por el Call Stack luego se imprime en consola. Cuando el Call Stack tiene el “setTimeout” se debe esperar un periodo de tiempo en este caso 5 segundos para imprimir el mensaje: “Callback Function”, ahí es cuando vemos en Web APIsel timer. Mientras tanto, el código sigue corriendo a la siguiente tarea para imprimir en consola la palabra: “end”.

El Event Loop es la tarea asignada (en este ejemplo el “callbackFn()”) para mover del Task Queue al Stack, solo si el stack está vacío:



### 🗄️ Javascript se organiza usando las siguientes estructuras de datos:

* *🗃️ Memory Heap*: Región de memoria libre de gran tamaño, dedicada al alojamiento dinámico de objetos (asignado a un montículo). Es compartida por todo el programa y controlada por un recolector de basura que se encarga de liberar aquello que no se necesita, es decir de forma desorganizada se guarda información de las variables y del scope.
* *🔋 Call Stack (pila LIFO: Last-in, First-out):* Apila de forma organizada las instrucciones de nuestro programa. La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en que punto del programa estamos, por donde vamos.
* *🚗🚕🚙 Task Queue (cola):* Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su callback correspondiente. El stack debe estar vacío para que esto suceda.
* *🚗🚕 Micro Task Queue:* Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

> *fuente:* https://platzi.com/comentario/3764409/