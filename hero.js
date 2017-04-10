var 
 navListItems = Array.prototype.slice
                  .call(document.querySelectorAll(".hero-nav li"),0),
 heroListItems = Array.prototype.slice
                  .call(document.querySelectorAll(".hero-slider li"),0),
 navMarker = document.querySelector(".marker"),
 slidesNumber = navListItems.length,
 visibleSlidePos = 0,
 selectedPos, activePos
 autoPlayId = 0, autoPlayDelay = 0;

document.ready = function () {

	setAutoplay(heroListItems,slidesNumber,autoPlayDelay);

	navListItems.forEach(function (element) {
	    element.addEventListener("click", function (event) {

	            selectedPos = navListItems.findIndex(item => item === element);
	            if(element.className != "selected"){
	            	activePos = navListItems.findIndex(item => item.className == "selected");
	            }
	            
	            selectedSlide = heroListItems.find(slide => slide.className == "selected");
	            if(selectedPos < activePos){
	                prevSlide((selectedSlide),heroListItems,navListItems,selectedPos);
	            }else {
	            	nextSlide((selectedSlide),heroListItems,navListItems,selectedPos);
	            }

	            //autoplay setting
				visibleSlidePos = selectedPos;

			    updateSliderNav(navListItems,selectedPos);
			    updateNavMarker(navMarker, selectedPos+1);

			    //reset autoplay
			    setAutoplay(heroListItems,slidesNumber, autoPlayDelay);
	    });});
}

function nextSlide(visibleSlide,heroListItems,navListItems,selectedPos){
    visibleSlide.className = "is-moving";
    //remove class is-moving once transition ended
    setTimeout(function () {
    	visibleSlide.className = "";
    },5000);

    newSelected = heroListItems.find(item => item.index == selectedPos);
    newSelected.className = "selected from-right move-left";
    heroListItems.find(item => item.index < selectedPos)
      .forEach(item => item.className = "move-left");
}

function prevSlide(visibleSlide,heroListItems,navListItems,selectedPos){
    visibleSlide.className = "is-moving";
    //remove class is-moving once transition ended
    setTimeout(function () {
    	visibleSlide.className = "";
    },5000);

    newSelected = heroListItems.find(item => item.index == selectedPos);
    newSelected.className = "selected from-left";
    heroListItems.find(item => item.index >= selectedPos)
      .forEach(item => item.className = "");
}

function updateSliderNav(navListItems,selectedPos){
	navListItems.find(item => item.className == "selected").className = "";
	navListItems.find(item => item.index == selectedPos).className = "selected";
}

function setAutoplay(heroListItems,slidesNumber, autoPlayDelay){
		if(heroListItems.className = "hero-slider autoplay") {
			clearInterval(autoPlayId);
			autoPlayId = window.setInterval(function(){autoplaySlider(length)}, delay);
		}
}

function autoplaySlider(length) {
	if( visibleSlidePosition < length - 1) {
		nextSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, visibleSlidePosition + 1);
		visibleSlidePosition +=1;
	} else {
		prevSlide(slidesWrapper.find('.selected'), slidesWrapper, sliderNav, 0);
		visibleSlidePosition = 0;
	}
	updateNavigationMarker(navigationMarker, visibleSlidePosition+1);
	updateSliderNavigation(sliderNav, visibleSlidePosition);
}

function updateNavMarker(marker,position){
	marker.className = "item-" + position;
}
