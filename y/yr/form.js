$(document).ready(function() {
  var modal2 = document.getElementById("win_modal2");
  var span = document.getElementsByClassName("close")[0];

  $('#open-window').on('click', function () {
      modal2.style.display = "block";
  });

  span.onclick = function() {
      modal2.style.display = "none";
  }
   
  window.onclick = function(event) {
      if (event.target == modal2) {
          modal2.style.display = "none";
          }
  }
});