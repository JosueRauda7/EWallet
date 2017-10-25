var contador;

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
id=JSON.parse(localStorage.getItem('id'));
contador=id;
nombres=JSON.parse(localStorage.getItem('nombres'));
apellidos=JSON.parse(localStorage.getItem('apellidos'));
correo=JSON.parse(localStorage.getItem('correo'));
contra=JSON.parse(localStorage.getItem('contra'));
direct=JSON.parse(localStorage.getItem('direccion'));
dui=JSON.parse(localStorage.getItem('dui'));
nit=JSON.parse(localStorage.getItem('nit'));
tele=JSON.parse(localStorage.getItem('telefono'));
fechanacimiento=JSON.parse(localStorage.getItem('fechanacimiento'));
preguntas=JSON.parse(localStorage.getItem('pregunta'));
respuesta=JSON.parse(localStorage.getItem('respuesta'));
estado=JSON.parse(localStorage.getItem('estado'));
if(id===null || nombres===null || apellidos===null || contra===null || direct===null || dui===null || nit===null ||  tele===null || fechanacimiento===null || preguntas===null || respuesta===null || estado===null){
	id=[];
	nombres=[];
	apellidos=[];
	correo=[];
	contra=[];
	direct=[];
	dui=[];
	nit=[];
	tele=[];
	fechanacimiento=[];
	preguntas=[];
	respuesta=[];
	var estado;
}




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
	var patron7=/^([A-Za-z]+[,]+){4}[0-9]{1}$/;//patron de direccion
	if (!(patron7.test(e))) {//validacion para direccion
		alert("Ingresar dirección con el formato: departamento, municipio, colonia, calle o pasaje, número de casa");
	}
}

/*				LocalStorage				*/

function guardar_objls(){
	localStorage.setItem("id",JSON.stringify(id));
	localStorage.setItem("nombres",JSON.stringify(nombres));
	localStorage.setItem("apellidos",JSON.stringify(apellidos));
	localStorage.setItem("correo",JSON.stringify(correo));
	localStorage.setItem("contra",JSON.stringify(contra));
	localStorage.setItem("direccion",JSON.stringify(direct));
	localStorage.setItem("dui",JSON.stringify(dui));
	localStorage.setItem("nit",JSON.stringify(nit));
	localStorage.setItem("telefono",JSON.stringify(tele));
	localStorage.setItem("fechanacimiento",JSON.stringify(fechanacimiento));
	localStorage.setItem("pregunta",JSON.stringify(preguntas));
	localStorage.setItem("respuesta",JSON.stringify(respuesta));
	localStorage.setItem("estado",JSON.stringify(estado));
}

//evento que registra al usuario en el que valida sus datos y los guarda
document.getElementById("registrar").onclick=function(){
	if(contador==null){
		contador=1;
	}else{
		contador=parseInt(id.length);
		contador=contador+1;
	}
	a=document.getElementById("nombres").value;
	b=document.getElementById("apellidos").value;
	c=document.getElementById("emailreg").value;
	d=document.getElementById("contrareg").value;
	e=document.getElementById("direccion").value;
	f=document.getElementById("dui").value;
	g=document.getElementById("nit").value;
	h=document.getElementById("telefono").value;
	i=document.getElementById("fechanac").value;
	//id
	id.push(contador);
	//nombres del usuario
	nombres.push(document.getElementById("nombres").value);
	//apellidos del usuario
	apellidos.push(document.getElementById("apellidos").value);
	//correo del usuario
	correo.push(document.getElementById("emailreg").value);
	//contraseña del usuario
	contra.push(document.getElementById("contrareg").value);
	//direccion del usuario
	direct.push(document.getElementById("direccion").value);
	//DUI del usuario
	dui.push(document.getElementById("dui").value);
	//NIT del usuario
	nit.push(document.getElementById("nit").value);
	//telefono del usuario
	tele.push(document.getElementById("telefono").value);
	//fecha de nacimiento del usuario
	fechanacimiento.push(document.getElementById("fechanac").value);
	//Pregunta de recuperacion del usuario
	preguntas.push(document.getElementById("pregunta").value);
	//Respuesta de recuperacion del usuario
	respuesta.push(document.getElementById("respuesta").value);
	//estado
	estado=false;
	valnombres();
	valcorreo(c);
	valcontra(d);
	valdirect();
	valdui();
	valnit();
	valtel();
	guardar_objls();
}



//evento para logearse en base al correo y contraseña
document.getElementById("entrar").onclick=function(){

	m=document.getElementById("email").value;
	r=document.getElementById("contra").value;
	valcorreo(m);
	id=JSON.parse(localStorage.getItem('id'));
	for(u=0;u<((id.length));u++){
	  if((m==correo[u])&&(r==contra[u])){
		location.href="menu.html";
          estado=true;
		localStorage.setItem("estado",JSON.stringify(estado));
		
		break;
	}
	}
}



//funcion para recuperacion de contraseña
function valpregunta(){
	var x;
	var y;
	var z;
	id=JSON.parse(localStorage.getItem('id'));
	y=document.getElementById("email").value;
	x=document.getElementById("respu").value;
	for(u=0;u<((id.length));u++){
	if((x==respuesta[u]) && (y==correo[u])){
		alert("Tu contraseña es: "+contra[u]);
		location.href="index.html";
		break;
	}
}
}


//evento para recuperar contraseña en el login
document.getElementById("olvidar").onclick=function(){
	var y,z;
	y=document.getElementById("email").value;
for(u=0;u<((id.length));u++){
	if(correo[u]===y){
		z=preguntas[u];
	}
}
	document.getElementById("seclogin").innerHTML="<h2>Iniciar Sesion</h2><label for='email'>Email:</label><br><br><input type='text' id='email' placeholder='Volver a ingresar correo' name='email'><br><br><label for='respu'>"+z+"</label><br><br><input type='text' id='respu' name='respu'><br><br><button id='listo' onClick='valpregunta()'>Listo</button><br>";
}
