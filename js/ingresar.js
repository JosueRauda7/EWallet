document.getElementById("guardar").onclick=function(){
    var a1 = document.getElementById("efectivo_i").value;
    var a2 = document.getElementById("baco_i").value;
    var a3 = document.getElementById("cuenta_i").value;
    var a4 = document.getElementById("saldo_i").value;
    
    //Quitar
    var ss1 = a1.split();
    var ss2 = a2.split();
    var ss3 = a3.split();
    var ss4 = a4.split();
    
    //Guardar
    
    localStorage.setItem("efecti", ss1);
    localStorage.setItem("bancoi",ss2);
    localStorage.setItem("cuentai",ss3);
    localStorage.setItem("saldoi",ss4);
}