


document.addEventListener("DOMContentLoaded", function(event) {

  var list_exercice=document.getElementById('list_exercice');

  for(var i=1;i<7;i++){
  list_exercice.innerHTML+='<a onclick="ex'+i+'('+i+')" class="mdl-navigation__link" id="exo'+i+'">  Exercice '+i+'</a>';
  }

});
