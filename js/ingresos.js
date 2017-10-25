
function ingreso_todo(){
    
document.getElementById("txtcuenta").innerHTML = "Cuenta:  " + localStorage.cuentai;  

document.getElementById("enviar_ingres").onclick=function(){
    
    var aa1 = document.getElementById("txt_fecha").value;
    var aa2 = document.getElementById("txt_motivo").value;
    var aa3 = document.getElementById("txt_monto").value;
    
    var ss_1 = aa1.split();
    var ss_2 = aa2.split();
    var ss_3 = aa3.split();

    localStorage.setItem("fecha", ss_1);
    localStorage.setItem("motivo",ss_2);
    localStorage.setItem("monto",ss_3);
    var ss_4=localStorage.saldoi-localStorage.monto;
    localStorage.setItem("saldoi",ss_4);
    
document.getElementById("mostrar_inreso").innerHTML = "<br><br><br><h1>Ingreso</h1><br>";
document.getElementById("mostrar_inreso").innerHTML += "<br><label>Fecha: </label><br>"+localStorage.fecha;
document.getElementById("mostrar_inreso").innerHTML += "<br><label>Motivo: </label><br>"+localStorage.motivo;
document.getElementById("mostrar_inreso").innerHTML += "<br><label>Monto: </label><br>"+localStorage.monto+"<br><br><br><br>";
    
}
    
}


if (window.addEventListener) {
    window.addEventListener("load", ingreso_todo);
} else if (window.attachEvent) {
    window.attachEvent("onload", ingreso_todo);
}
