function ingresion_todo(){
    
document.getElementById("txt_cuentain").innerHTML = "Cuenta:  " + localStorage.cuentai;  

document.getElementById("enviar_gasto").onclick=function(){
    
    var aaa1 = document.getElementById("txt_banco").value;
    var aaa2 = document.getElementById("txt_cuenta").value;
    var aaa3 = document.getElementById("txt_actual").value;
    
    var sss_1 = aaa1.split();
    var sss_2 = aaa2.split();
    var sss_3 = aaa3.split();

    localStorage.setItem("bancogas", sss_1);
    localStorage.setItem("cuentagas",sss_2);
    localStorage.setItem("montogas",sss_3);
  
}
    
}


if (window.addEventListener) {
    window.addEventListener("load", ingresion_todo);
} else if (window.attachEvent) {
    window.attachEvent("onload", ingresion_todo);
}
