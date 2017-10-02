var a;//variable para nombre
var b;//variable para apellidos
var c;//variable para correo
var d;//variable para contraseña
var e;//variable para direccion
var f;//variable para DUI
var g;//variable para NIT
var h;//variable para telefono
var i;//variable para fecha de nacimiento
var j;//variable de pregunta
var k;//variable de respuesta
var m;//variable de correo del login
var r;//variable de contraseña del login


//objeto usuario
var usuario = new Object();

	//nombres del usuario
	usuario.nombres=document.getElementById("nombres").value;
	//apellidos del usuario
	usuario.apellidos=document.getElementById("apellidos").value;
	//correo del usuario
	usuario.correo=document.getElementById("emailreg").value;
	//contraseña del usuario
	usuario.contra=document.getElementById("contrareg").value;
	//direccion del usuario
	usuario.direct=document.getElementById("direccion").value;
	//DUI del usuario
	usuario.dui=document.getElementById("dui").value;
	//NIT del usuario
	usuario.nit=document.getElementById("nit").value;
	//telefono del usuario
	usuario.tele=document.getElementById("telefono").value;
	//fecha de nacimiento del usuario
	usuario.fechanacimiento=document.getElementById("fechanac").value;
	//Pregunta de recuperacion del usuario
	usuario.preguntas=document.getElementById("pregunta").value;
	//Respuesta de recuperacion del usuario
	usuario.respuesta=document.getElementById("respuesta").value;


function valnombres(){//funcion para validar nombres y apellidos
	var patron=/[A-Za-z]+\s+[A-Za-z]/;//patron de nombres y apellidos
	if (!(patron.test(a))) {//validacion para nombres
		alert("Ingrese sus nombres");
	}
	if (!(patron.test(b))) {//validacion para apellidos
		alert("Ingrese sus apellidos");
	}
}
function valcorreo(x){//funcion para validar correo
	//patron de correo
	var patron2=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!(patron2.test(x))) {//validacion para correo
		alert("Ingrese correctamente su correo electrónico");
	}
}
function valcontra(y){//funcion para validar contraseña
	var patron3=/\d/;//patron de numero
	var pat1=/\W/;//patron de simbolo
	var pat2=/[a-z]/;//patron de minúscula
	var pat3=/[A-Z]/;//patron de mayúscula
	//validacion para contraseña
	if (!(patron3.test(y))|(y.length<8)|!(pat1.test(y))|!(pat2.test(y))|!(pat3.test(y))) {
		alert("Ingrese correctamente su contraseña. Debe llevar almenos: una letra mayúscula, una minúscula, un símbolo o un dígito. Mín de 8 carácteres.");
	}
}
function valtel(){//funcion para validar telefono
	var patron4 = /^\d{4}-\d{4}$/;//patron de telefono
	if (!(patron4.test(h))) {//validacion para telefono
		alert("Ingresar número de teléfono con el formato: ####-####");
	}
}
function valdui(){//funcion para validar DUI
	var patron5=/^\d{8}-\d{1}$/;//patron de DUI
	if (!(patron5.test(f))) {//validacion para DUI
		alert("Ingresar DUI con el formato: ########-#");
	}
}
function valnit(){//funcion para validar NIT
	var patron6=/^\d{4}-\d{6}-\d{3}-\d{1}$/;//patron de NIT
	if (!(patron6.test(g))) {//validacion para NIT
		alert("Ingresar NIT con el formato: ####-######-###-#");
	}
}
function valdirect(){//funcion para validar direccion
	var patron7=/^([A-Za-z]+[,]+){3}[0-9]{1}$/;//patron de direccion
	if (!(patron7.test(e))) {//validacion para direccion
		alert("Ingresar dirección con el formato: departamento, municipio, colonia, calle o pasaje, número de casa");
	}
}



//evento que registra al usuario en el que valida sus datos y los guarda
document.getElementById("registrar").onclick=function(){
	a=document.getElementById("nombres").value;
	b=document.getElementById("apellidos").value;
	c=document.getElementById("emailreg").value;
	d=document.getElementById("contrareg").value;
	e=document.getElementById("direccion").value;
	f=document.getElementById("dui").value;
	g=document.getElementById("nit").value;
	h=document.getElementById("telefono").value;
	i=document.getElementById("fechanac").value;
	usuario.nombres=document.getElementById("nombres").value;
	usuario.apellidos=document.getElementById("apellidos").value;
	usuario.correo=document.getElementById("emailreg").value;
	usuario.contra=document.getElementById("contrareg").value;
	usuario.direct=document.getElementById("direccion").value;
	usuario.dui=document.getElementById("dui").value;
	usuario.nit=document.getElementById("nit").value;
	usuario.tele=document.getElementById("telefono").value;
	usuario.fechanacimiento=document.getElementById("fechanac").value;
	usuario.preguntas=document.getElementById("pregunta").value;
	usuario.respuesta=document.getElementById("respuesta").value;
	valnombres();
	valcorreo(c);
	valcontra(d);
	valdirect();
	valdui();
	valnit();
	valtel();
}



//evento para logearse en base al correo y contraseña
document.getElementById("entrar").onclick=function(){
	m=document.getElementById("email").value;
	r=document.getElementById("contra").value;
	valcorreo(m);
	if((usuario.correo=m)&&(usuario.contra=r)){
		location.href="menu.html"
	}
}



//funcion para recuperacion de contraseña
function valpregunta(){
	var x;
	x=document.getElementById("respu").value;
	if(x=usuario.respuesta){
		alert("Tu contraseña es: "+usuario.contra);
		location.href="index.html"
	}
}


//evento para recuperar contraseña en el login
document.getElementById("olvidar").onclick=function(){
	document.getElementById("seclogin").innerHTML="<h2>Iniciar Sesion</h2><label for='email'>Email:</label><br><br><input type='text' id='email' name='email'><br><br><label for='contra'>Contraseña:</label><br><br><input type='password' id='contra' name='contra'><br><br><button id='olvidar'>Olvide mi contraseña. Click aquí...</button><br><label for='respu'>"+usuario.preguntas+"</label><br><br><input type='text' id='respu' name='respu'><br><br><button id='listo' onClick='valpregunta()'>Listo</button><br>";
}
