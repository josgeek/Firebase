//Login con correo y contrasena
function registrarse(){

var email = document.getElementById('correo').value;
var contrasena = document.getElementById('contrasena').value;

firebase.auth().createUserWithEmailAndPassword(email, contrasena).then(function(user) {
alert("Te has registrado correctamente");
guardarCorreo(user);


  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Datos invalidos, intenta nuevamente "+ errorMessage);
  });

}

function guardarCorreo(user){
  var usuario = {
    uid:user.uid,
    email:user.email,
  }
  firebase.database().ref("itsh/"+ user.uid).set(usuario);
  //Set graba en toda la rama por eso se puso push
}

function iniciar() {

  var email = document.getElementById('correo').value;
  var contrasena = document.getElementById('contrasena').value;

firebase.auth().signInWithEmailAndPassword(email,contrasena).then(function(user){
saber();
}).catch(function(error){
    alert("Datos invalidos, intenta nuevamente");
});

}

function saber() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var email = user.email;

   alert("Has iniciado sesión correctamente, bienvenido "+ email);

    } else {
      // User is signed out.
      // ...
    }
  });
}






// ----------------------------------------Login con Google---------------------------------------------------------
//Login- Instancia del objeto del proveedor
var Google = new firebase.auth.GoogleAuthProvider();

//Acciones del Login de GOOGLE (Observador)
$('#google').click(function(){
  firebase.auth()
  .signInWithPopup(Google)
  .then(function(result) {
    guardarAutoGoogle(result.user);
    // console.log(result.user);
      // Ocultar boton
     // $('#mensaje').show();
     // $("#mensaje").click(function(){
     //     $("p").show();


     });

    });

//Funcion que guarda los datos automaticamente
function guardarAutoGoogle(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("itsh/"+ user.uid).set(usuario);
  //Set graba en toda la rama por eso se puso push


}


//-------------------------------Login Con facebook----------------------------------------------

var provider = new firebase.auth.FacebookAuthProvider();


$('#facebook').click(function(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    guardarAutoFacebook(result.user);
    // console.log(result.user);
      // Ocultar boton
     // $('#mensaje').show();
     // $("#mensaje").click(function(){
     //     $("p").show();

     });

    });

//Funcion que guarda los datos automaticamente
function guardarAutoFacebook(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("itsh/"+ user.uid).set(usuario);
  //Set graba en toda la rama por eso se puso push

}

//-------------------------------------Login Twitter-----------------------------------------------
var Twitter = new firebase.auth.TwitterAuthProvider();

$('#twitter').click(function(){
  firebase.auth()
  .signInWithPopup(Twitter)
  .then(function(result) {
    guardarAutoTwitter(result.user);

      // Ocultar boton
     // $('#mensaje').show();
     // $("#mensaje").click(function(){
     //     $("p").show();

     });

    });

//Funcion que guarda los datos automaticamente
function guardarAutoTwitter(user){
  var usuario = {
    uid:user.uid,
    nombre:user.displayName,
    email:user.email,
    foto:user.photoURL
  }
  firebase.database().ref("itsh/"+ user.uid).set(usuario);
  //Set graba en toda la rama por eso se puso push

}
