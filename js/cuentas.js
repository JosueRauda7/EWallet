

function inciar_todo(){
    
  //Mostrar
 document.getElementById("datos_efectivo").innerHTML = "Efectivo: $ " + localStorage.efecti;  
    
}


if (window.addEventListener) {
    window.addEventListener("load", inciar_todo);
} else if (window.attachEvent) {
    window.attachEvent("onload", inciar_todo);
}










