window.addEventListener("load", function() {
  let svgObject = document.querySelector('.map').contentDocument;
  let svg = svgObject.addEventListener('click', (e) => {
    document.querySelector('.infoDiv').innerHTML = e.target.id
  })
});



