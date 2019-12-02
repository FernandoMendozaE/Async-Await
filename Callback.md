# Callback

## ¿Qué es un Callback?

- **De forma sencilla:** Un Callback (llamada de vuelta) es una función que se ejecutará después de que otra función haya terminado de ejecutarse, de aquí el nombre de Callback.

- **De forma más compleja:** En JavaScript, las funciones son objetos. Por ello, las función admiten funciones como argumentos y pueden ser devueltas por otras funciones. Las funciones que hacen esto se denominan funciones de orden alto (high-order). Cualquier función que se pase como argumento se denomina función Callback.

### Ejemplo 1

La función de callback se define en el segundo argumento de nuestra llamada a doHomework.

> ```javascript
> function doHomework(subject, callback) {
>   alert(`Starting my ${subject} homework.`);
>   callback();
> }
>
> // ejecución de la funcion doHomework
> doHomework("math", function() {
>   alert("Finished my homework");
> });
> ```

Como verás, si tecleas el código anterior en tu consola obtendrás dos alertas: una ‘Starting homework’ y a continuación la alerta ‘finished homework’.

### Ejemplo 2

Creación de un servidor con NodeJS donde se maneja las peticiones de los usuarios el responde una respuesta usando un modelo mongoDB.

```javascript
/**
 * req: Recibe la información del usuario
 * res: Información que se devuelve al navegador
 */

function requestHandler(req, res) {
  // Realiza una consulta a la BD
  User.finById(req.userId, function(err, user) {
    // devolución de la repuesta callback
    if (err) {
      res.send(err);
    } else {
      Tasks.finById(user.tasksId, function(err, tasks) {
        if (err) {
          res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function(err) {
            if (err) {
              res.send(err);
            } else {
              res.send("Task Complite");
            }
          });
        }
      });
    }
  });
}
```
