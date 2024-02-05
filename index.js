// Get the checkbox element
var checkbox = document.getElementById("hamburger_checkbox");

// Get the elements to modify
var element1 = document.getElementById("element1");
var element2 = document.getElementById("element2");
var element3 = document.getElementById("element3");
var menu = document.getElementById("menu");

// Add event listener for checkbox change
checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    console.log("checked")
    // Checkbox is checked, add the checked classes
    element1.classList.add("checked_1");
    element2.classList.add("checked_2");
    element3.classList.add("checked_3");
    element1.classList.remove("unchecked_1");
    element2.classList.remove("unchecked_2");
    element3.classList.remove("unchecked_3");
    menu.style.display = "block";
    setTimeout(function() {
      menu.style.opacity = 1;
    }, 1); // 300 milliseconds delay (0.3 seconds)
  } else {
    // Checkbox is unchecked, remove the checked classes
    element1.classList.remove("checked_1");
    element2.classList.remove("checked_2");
    element3.classList.remove("checked_3");
    element1.classList.add("unchecked_1");
    element2.classList.add("unchecked_2");
    element3.classList.add("unchecked_3");
    menu.style.opacity = 0;
    setTimeout(function() {
      menu.style.display = "none";
    }, 300); // 300 milliseconds delay (0.3 seconds)
  }
});