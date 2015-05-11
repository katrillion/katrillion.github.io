function setUpMessage() {
  var outOfScopeMessage = 'hi there';
}

window.onload = function () {
  var link = document.getElementById("directions");

  link.onclick=function(e){
    e.preventDefault();
    alert('You have requested directions');
  };

  setUpMessage();
  console.log(outOfScopeMessage);

};