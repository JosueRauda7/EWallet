function ingresion_todo(){
    


document.getElementById("enviar_gasto").onclick=function(){
    
    var aaa1 = document.getElementById("txt_banco").value;
    var aaa2 = document.getElementById("txt_cuenta").value;
    var aaa3 = document.getElementById("txt_actual").value;
    var aaa4 = document.getElementById("cuentacargo").value;
    
    var sss_1 = aaa1.split();
    var sss_2 = aaa2.split();
    var sss_3 = aaa3.split();
    var sss_4 = aaa4.split();
    localStorage.setItem("fechagas", sss_1);
    localStorage.setItem("cuentagas",sss_2);
    localStorage.setItem("montogas",sss_3);
    localStorage.setItem("cuentacargo",sss_4);
    var sss_5=localStorage.efecti-localStorage.montogas;
    localStorage.setItem("saldoi",sss_5);
    
    
    
document.getElementById("mostrar_tos").innerHTML = "<br><br><br><h1>Gastos</h1><br>";
document.getElementById("mostrar_tos").innerHTML += "<br><label>Fecha: </label><br>"+localStorage.fechagas;
document.getElementById("mostrar_tos").innerHTML += "<br><label>Motivo: </label><br>"+localStorage.cuentagas;
document.getElementById("mostrar_tos").innerHTML += "<br><label>Monto: </label><br>"+localStorage.montogas;
document.getElementById("mostrar_tos").innerHTML += "<br><label>Cuenta: </label><br>"+localStorage.cuentacargo+"<br><br><br><br>";
}
    
}


if (window.addEventListener) {
    window.addEventListener("load", ingresion_todo);
} else if (window.attachEvent) {
    window.attachEvent("onload", ingresion_todo);
}
