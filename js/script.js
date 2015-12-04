var AppValidando = {};
  AppValidando.validacion = function(){

    return {

     validandoForm:function(e,n,m){
                 var n = document.getElementById("nombre").value;
                 var e = document.getElementById("email").value;
                 var m = document.getElementById("mensaje").value;
                 form = [];

                    var nombre = /^\+$/;                   
                    if(n.length === 0 || nombre.test(n) ) {
                      alert("Pon bien tu nombre");
                      return false;
                     }
                    var email = /^\+$/;;                   
                    if(e.length === 0 || !(/^([a-zA-Z0-9_.-])+@(([a-zA-z0-9-])+.)+([a-zA-Z0-9-]{2,4})+$/.test(e))|| email.test(e) ) {
                      alert("Pon bien tu email");
                      return false;
                    }                   
                   var mensaje = /^\+$/;                   
                    if(m.length === 0 || mensaje.test(m) ) {
                          alert("Tu mensaje esta mal");
                          return false;
                     } else {
                      form.push(n,e,m);
                      document.getElementById("form").reset();
                      alert("Tu mensaje ah sido enviado");
                      console.log(form);
                      return false;
                     }
                  }
  }

}();
function Informacion(a,e,m) {
this.nombre = a;
this.email = e;
this.mensaje = m;
}



function ajaxRequest(){

var mygetrequest =new XMLHttpRequest();
mygetrequest.onreadystatechange = function(){
  if (mygetrequest.readyState === 4 &&  mygetrequest.status == 200){
    var jsonObj = JSON.parse(mygetrequest.responseText);

    var content = "";
    for (var i = 0; i < jsonObj.Proyectos.length; i++) {    
        content += '<li class="img-proyect"><img class="img-proyect-ajax" src= "'+jsonObj.Proyectos[i].img+'"><span class="descript"><h2 class = text-descript>'+jsonObj.Proyectos[i].Nombre+'</h2><a target="_black" href="'+jsonObj.Proyectos[i].proyecto+'"></span><img class="mas-descript" src="'+jsonObj.Proyectos[i].imgMas+'"><a><p class="text-info-descript">'+jsonObj.Proyectos[i].informacion+'</p></li>'
    };

      document.getElementById("cont-proyect").innerHTML = content;
  }
}
mygetrequest.open("GET", "js/proyectos.json", true);
mygetrequest.send();
};
ajaxRequest();








