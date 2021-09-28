
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const areaBtn = document.querySelector("#areaButton");
const output = document.querySelector("#output");

function calculateArea()
{
    var base1 = Number(base.value);
    var height1 = Number(height.value);
    var area = (base1*height1)/2;
    output.innerText = "Area of Triangle is : " + area;
}

areaBtn.addEventListener("click",calculateArea)





