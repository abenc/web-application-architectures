


document.addEventListener("DOMContentLoaded", function(event) {

  var list_exercice=document.getElementById('list_exercice');

  for(var i=1;i<7;i++){
  list_exercice.innerHTML+='<div onclick="ex'+i+'()" class="exo" id="exo'+i+'">  Exercice '+i+'</div>';
  }

});
