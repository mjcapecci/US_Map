window.addEventListener('load', function() {
  let svgObject = document.querySelector('.map').contentDocument;
  let svg = svgObject.addEventListener('click', e => {
    if (e.target.id.length === 2)
      document.querySelector('.infoDiv').innerHTML = e.target.id;
  });
});
