// get elements
var input = document.getElementById("input");
var button = document.getElementById("button");
var result = document.getElementById("result");

button.addEventListener("click", function (){
  result.innerHTML = "";

  var birthDate = new Date(input.value);

  if (input.value === "") {
    result.innerHTML = "<p>Please select a date</p>";
    return;
  }

  var today = new Date();

  var years = today.getFullYear() - birthDate.getFullYear();
  var months = today.getMonth() - birthDate.getMonth();
  var days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months = months - 1;
    var prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days = days + prevMonth.getDate();
  }

  if (months < 0) {
    years = years - 1;
    months = months + 12;
  }

  var text = document.createElement("p");
  text.innerHTML = "You are <b>" + years + "</b> years, <b>" + months + "</b> months and <b>" + days + "</b> days old";
  result.appendChild(text);
});
