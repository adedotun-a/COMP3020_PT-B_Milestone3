function myFunction() {
	document.getElementById("headingOne").classList.toggle("show");
    document.getElementById("headingTwo").classList.toggle("show");
    document.getElementById("headingThree").classList.toggle("show");
    document.getElementById("headingFour").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('accordion-button collapsed')) {
    var dropdowns = document.getElementsByClassName("accordion-collapse collapse");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}