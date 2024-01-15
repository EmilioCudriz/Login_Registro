
//documents_botones

document.getElementById("boton_realizar_registro").addEventListener("click",registro);
document.getElementById('boton_registrarse').addEventListener('click', json1);

document.getElementById('boton_iniciar_sesion').addEventListener('click', iniciar_sesion);
document.getElementById('boton_ingresar').addEventListener('click', registro);


// Declaracion de variables

var contenedor_login_register = document.querySelector(".contenedor_login_register");
var formulario_login = document.querySelector(".formulario_login");
var formulario_register = document.querySelector(".formulario_registro");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_register = document.querySelector(".caja_trasera_registrar");
var lista_registros = []

//funciones:

function registro(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}
function guardar_registro(Nombre, Correo, Usuario, Contraseña){

    this.Nombre = Nombre;
    this.Correo = Correo;
    this.Usuario = Usuario;
    this.Contraseña = Contraseña;

}
function json1(){
    let Nombre = document.getElementById("nombre_completo").value;
    let Correo = document.getElementById("correo").value;
    let Usuario = document.getElementById("usuario").value;
    let Contraseña = document.getElementById("contrasenia").value;

    var nuevo_list = new guardar_registro(Nombre, Correo, Usuario, Contraseña)
    
   lista_registros.push(nuevo_list);

}



function iniciar_sesion(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
}



















//window.addEventListener("load", iniciar_juego)