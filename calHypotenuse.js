const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const output = document.querySelector("#output");
const btn = document.querySelector("#calhypo");

function calculateHypotenuse()
{
  var hypo;
  hypo = Math.sqrt((num1.value*num1.value) + (num2.value*num2.value));
  output.innerText = "hypotenuse value is " + hypo;
}

btn.addEventListener("click",calculateHypotenuse);

