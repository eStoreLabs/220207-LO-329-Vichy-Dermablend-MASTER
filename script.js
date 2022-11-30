
function toggleFirst()
{   
    let slider = null;
    slider = new BeerSlider(document.getElementById('beer-slider'))
    let one = document.getElementById("es-skora-naczynkowa");
    let two = document.getElementById("es-skora-przebarwienia");
    let three = document.getElementById("es-skora-tradzikowa");

    if (one.style.display == "none") {
      one.style.display = "block"
      two.style.display = "none"
      three.style.display = "none"
    } else {
      one.style.display = "block"
    } 
}

function toggleSecond()
{ 
  let slider = null;
  slider = new BeerSlider(document.getElementById('beer-slider-2'))
  let one = document.getElementById("es-skora-naczynkowa");
    let two = document.getElementById("es-skora-przebarwienia");
    let three = document.getElementById("es-skora-tradzikowa");

  if (two.style.display == "none") {
    two.style.display = "block"
    one.style.display = "none"
    three.style.display = "none"
  } else {
    two.style.display = "block"
  } 
}

function toggleThird()
{ let slider = null;
  slider = new BeerSlider(document.getElementById('beer-slider-3'))
    let one = document.getElementById("es-skora-naczynkowa");
    let two = document.getElementById("es-skora-przebarwienia");
    let three = document.getElementById("es-skora-tradzikowa");

  if (three.style.display == "none") {
    three.style.display = "block"
    two.style.display = "none"
    one.style.display = "none"
  } else {
    three.style.display = "block"
  } 
}

function toggleId(id)
{
  var div = document.getElementById(id);
  if(div.style.display == "none")
    div.style.display = "block";
  else
    div.style.display = "none";
}

