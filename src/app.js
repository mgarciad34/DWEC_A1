function iniciarSesion() {
   var txtuser = document.getElementById('txtuser').value;
   var txtpass = document.getElementById('txtpass').value;
   const user = 'usuario@root.com'
   const pass = 'rootroot'

   var array = txtuser.split("");
   var msg = '';

   if (txtuser === "" || txtpass === "") {
      msg += 'Rellena los campos'
   } else {
      var salir = false
      for (let index = 0; index < array.length && !salir; index++) {
         if (array[0] == '@') {
            msg += 'No puedes poner @ en la primera posicion '
            salir = true
         } else if (array[array.length - 3] == '@') {
            msg += 'No puedes poner un @ en las 3 ultimas posiciones '
            salir = true
         } else if (array[array.length - 2] == '@') {
            msg += 'No puedes poner un @ en las 2 ultimas posiciones '
            salir = true
         } else if (array[array.length - 1] == '@') {
            msg += 'No puedes poner un @ en la ultima posiciones '
            salir = true
         } else {

         }

         if (txtuser.includes('@')) {
            var email = txtuser.split('@')

         } else {
            msg += 'El email debe incluir un @ '
         }
      }

      if (txtpass.length >= 8) {
         if (txtuser == user && txtpass == pass) {
            if (msg != '') {
               alert(msg)
            } else {
               window.location = "misdatos.html";
            }
         } else {
            msg += 'Usuario o contraseña incorrectos'
         }
      } else {
         msg += 'La contraseña no cumple con el minimo de 8 caracteres'
      }



   }
}
var objeto = {
   usuarios: []
}

function datos() {
   var msg = '';
   // Obtener los valores de los campos del formulario
   const nombre = document.getElementById("nombre").value;
   const primerapellido = document.getElementById("primerapellido").value;
   const segundoapellido = document.getElementById("segundoapellido").value;
   const dni = document.getElementById("dni").value;

   if (nombre.length <= 30 && nombre.length >= 3) {
      if (primerapellido.length <= 30 && nombre.length >= 2) {
         if (segundoapellido.length <= 30 && nombre.length >= 2) {
            //Aqui falta el if de la hora
            if (validarDNI(dni)) {
               console.log("El DNI es válido.");

               var usuario = [nombre, primerapellido, segundoapellido, dni];
               objeto.usuarios.push(usuario);
               console.log(objeto.usuarios);

            } else {
               console.log("El DNI no es válido.");
               console.log(objeto.usuarios);
            }
         } else {
            msg += 'ERROR El segundo apellido tiene menos de 2 caracteres o mas de 30'
         }
      } else {
         msg += 'ERROR El primer apellido tiene menos de 2 caracteres o mas de 30'
      }




   } else {
      msg += 'El nombre tiene menos de 3 caracteres o mas de 30'
   }
}
function validarDNI(dni) {
   // Verificar la longitud del DNI (debe tener 9 caracteres)
   if (dni.length !== 9) {
      return false;
   }

   // Obtener el número y la letra del DNI
   const numeroDNI = dni.slice(0, 8);
   const letraDNI = dni.charAt(8).toUpperCase();

   // Array con las letras permitidas en un DNI
   const letrasPermitidas = "TRWAGMYFPDXBNJZSQVHLCKE";

   // Verificar si el número es válido (debe ser un número entero)
   if (!(/^\d+$/.test(numeroDNI))) {
      return false;
   }

   // Calcular la letra correcta para el número de DNI
   const numero = parseInt(numeroDNI, 10);
   const letraCorrecta = letrasPermitidas.charAt(numero % 23);

   // Verificar si la letra del DNI coincide con la letra calculada
   if (letraDNI === letraCorrecta) {
      return true;
   } else {
      return false;
   }
}

function limpiar() {
   document.getElementById("nombre").value = "";
   document.getElementById("primerapellido").value = "";
   document.getElementById("segundoapellido").value = "";
   document.getElementById("correo").value = "";
   document.getElementById("dni").value = "";
}