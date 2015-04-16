function ajaxRequest(){

var mygetrequest =new XMLHttpRequest();
mygetrequest.onreadystatechange = function(){
  if (mygetrequest.readyState === 4 &&  mygetrequest.status == 200){
    var jsonObj = JSON.parse(mygetrequest.responseText);

    var content = "";
    for (var i = 0; i < jsonObj.Proyectos.length; i++) {    
        content += '<li class="img-proyect"><img class="img-proyect-ajax" src= "'+jsonObj.Proyectos[i].img+'"><span class="descript"><h2 class = text-descript>'+jsonObj.Proyectos[i].Nombre+'</h2></span><img class="mas-descript" src="'+jsonObj.Proyectos[i].imgMas+'"><p class="text-info-descript">'+jsonObj.Proyectos[i].informacion+'</p></li>'
    };

      document.getElementById("cont-proyect").innerHTML = content;
  }
}
mygetrequest.open("GET", "js/proyectos.json", true);
mygetrequest.send();
};
ajaxRequest();





/*////////////////////////////////////// Validación /////////////////////////////////////////////////*/




function validacion(val){
      var elemento = document.getElementById(val);
      if(elemento.checkValidity())
          elemento.style.borderColor="Aqua";
      else
          elemento.style.borderColor = "red";
    }
    function buttonAction()
    {
      var nombreVal=document.getElementById('nombre').checkValidity();
      var emailVal=document.getElementById('email').checkValidity();

      if(nombreVal && emailVal){
        alert("Su informacion fue enviada exitosamente");
      } else{
        alert("Por Favor revise sus campos.");
      }   
    }












