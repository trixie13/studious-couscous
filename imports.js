// functions to handle import errors
  function handleLoad(e) {
    console.log('Loaded import: ' + e.target.href);
  }
  function handleError(e) {
    console.log('Error loading import: ' + e.target.href);
  }


// functions to import header and footer
function importElement (element) {
	var link = document.querySelector(`link[href="${element}.html"]`);
	var content = link.import;
    var elem = content.querySelector(`.${element}`);
    document.querySelector(`${element}`).appendChild(elem.cloneNode(true));
}

window.onload = function () {
	importElement("header");
	importElement("footer");
}