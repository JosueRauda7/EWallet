

function inciar_todo(){
    
  //Mostrar
 document.getElementById("datos_efectivo").innerHTML = "Efectivo: $ " + localStorage.efecti;  
    
    
document.getElementById("nuevo").innerHTML = "<br><br><br><h1>Cuenta</h1>";
document.getElementById("nuevo").innerHTML += "<br><label>Banco: </label>"+localStorage.bancocu;
document.getElementById("nuevo").innerHTML += "<br><label>N° de cuenta: </label>"+localStorage.numcu;
document.getElementById("nuevo").innerHTML += "<br><label>Saldo Actual: </label>"+localStorage.salcu;


//Tarjetas
document.getElementById("nuevo2").innerHTML = "<br><br><br><h1>Tarjetas</h1>";
document.getElementById("nuevo2").innerHTML += "<br><label>Banco: </label>"+localStorage.bancotar;
document.getElementById("nuevo2").innerHTML += "<br><label>N° de tarjeta: </label>"+localStorage.numtar;
document.getElementById("nuevo2").innerHTML += "<br><label>Saldo Actual: </label>"+localStorage.saltar;
document.getElementById("nuevo2").innerHTML += "<br><label>% Interes: </label>"+localStorage.tastar;
document.getElementById("nuevo2").innerHTML += "<br><label>Fecha: </label>"+localStorage.datetar;


document.getElementById("envio_cu").onclick=function(){
    cu1=document.getElementById("banco_cu").value;
    cu2=document.getElementById("numcu").value;
    cu3=document.getElementById("salcu").value;
    
    localStorage.setItem("bancocu",cu1);
    localStorage.setItem("numcu",cu2);
    localStorage.setItem("salcu",cu3);
    
    
}
document.getElementById("envio_tar").onclick=function(){
    tar1=document.getElementById("bancotar").value;
    tar2=document.getElementById("numtar").value;
    tar3=document.getElementById("saltar").value;
    tar4=document.getElementById("tastar").value;
    tar5=document.getElementById("datetar").value;
    
    localStorage.setItem("bancotar",tar1);
    localStorage.setItem("numtar",tar2);
    localStorage.setItem("saltar",tar3);
    localStorage.setItem("tastar",tar4);
    localStorage.setItem("datetar",tar5);
}

}



if (window.addEventListener) {
    window.addEventListener("load", inciar_todo);
} else if (window.attachEvent) {
    window.attachEvent("onload", inciar_todo);
}










