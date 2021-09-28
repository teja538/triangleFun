var angleOne = document.querySelector("#angleOne");
var angleTwo = document.querySelector("#angleTwo");
var angleThree = document.querySelector("#angleThree");
var isTriBtn = document.querySelector("#isTriangle");
var output = document.querySelector("#output");

function isTriangle()
{
  if(Number(angleOne.value) < 0 || Number(angleTwo.value)<0 ||  Number(angleThree.value) < 0)
  {
    output.innerText = "Angles should not be negative";
  }
  else if(calculateSumOfAngles() === 180)
  {
    output.innerText = "It forms a Triangle";
  }
  else
  {
    output.innerText = "It does not form a Triangle";
  }
}

function calculateSumOfAngles()
{
  sum1 = Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);
  return sum1;
}

isTriBtn.addEventListener("click",isTriangle);