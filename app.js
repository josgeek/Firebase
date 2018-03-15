//Login con correo y contrasena
function registrarse(){

var email = document.getElementById('correo').value;
var contrasena = document.getElementById('contrasena').value;

firebase.auth().createUserWithEmailAndPassword(email, contrasena)
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
 alert("Correo y/o contraseña invalidos");

});

 alert("Te has registrado correctamente");

}











// Login con Google
//Login- Instancia del objeto del proveedor
var provider = new firebase.auth.GoogleAuthProvider();

//Acciones del Login de GOOGLE (Observador)
$('#google').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    guardarAuto(result.user);
    // console.log(result.user);
      // Ocultar boton
     // $('#mensaje').show();
     // $("#mensaje").click(function(){
     //     $("p").show();

       alert("Has iniciado sesión correctamente");
     });

    });

//Funcion que guarda los datos automaticamente
function guardarAuto(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("itsh/"+ user.uid).set(usuario);
  //Set graba en toda la rama por eso se puso push


}


//Login Con facebook

var provider = new firebase.auth.FacebookAuthProvider();


$('#facebook').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    guardarAuto(result.user);
    // console.log(result.user);
      // Ocultar boton
     // $('#mensaje').show();
     // $("#mensaje").click(function(){
     //     $("p").show();

       alert("Has iniciado sesión correctamente");
     });

    });

//Funcion que guarda los datos automaticamente
function guardarAuto(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("itsh/"+ user.uid).set(usuario);
  //Set graba en toda la rama por eso se puso push

}

//Login Twitter
var provider = new firebase.auth.TwitterAuthProvider();

$('#twitter').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    guardarAuto(result.user);
    console.log(result.user);
      // Ocultar boton
     // $('#mensaje').show();
     // $("#mensaje").click(function(){
     //     $("p").show();

       alert("Has iniciado sesión correctamente");
     });

    });

//Funcion que guarda los datos automaticamente
function guardarAuto(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("itsh/"+ user.uid).set(usuario);
  //Set graba en toda la rama por eso se puso push

}
