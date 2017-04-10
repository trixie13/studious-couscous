var navListItems = Array.prototype.slice
                  .call(document.querySelectorAll(".hero-nav li"),0),
    heroListItems = Array.prototype.slice
                  .call(document.querySelectorAll(".hero-slider li"),0)
    selectedPos = 0,
    activePos = 0,
    activeSlide = null;


navListItems.forEach(function (element) {
    element.addEventListener("click", function (event) {
            //selected -> the new selected slide
            //active -> the current showing slide
            selectedPos = navListItems.findIndex(item => item === element);
            if(element.className != "selected"){
            	activePos = navListItems.findIndex(item => item.className == "selected");
            }
            activeSlide = heroListItems.find(slide => slide.className == "selected");
            //console.log(activePos);
            //console.log(selectedPos);
            if(selectedPos == activePos)return;
            if(selectedPos < activePos){
                
                prevSlide(activeSlide,heroListItems,navListItems,selectedPos);
            
            }else {
            	
            	nextSlide(activeSlide,heroListItems,navListItems,selectedPos);
            
            }

		    updateSliderNav(selectedPos);

    });
});


function nextSlide(activeSlide,heroListItems,navListItems,selectedPos){
    activeSlide.className = "moving move-left";
    setTimeout(function () {
    	//remove class is-moving once transition ended
    	activeSlide.className = "move-left";
    },500);

    newSelected = heroListItems.find((item,index) => index == selectedPos);
    newSelected.className = "selected moving show";
     setTimeout(function () {
    	//remove class is-moving once transition ended
    	newSelected.className = "selected";
    },500);

    for(i = 0; i < selectedPos; i++) {
    	heroListItems[i].className = "move-left";
    }
}

function prevSlide(activeSlide,heroListItems,navListItems,selectedPos){
    activeSlide.className = "move-right";
    setTimeout(function () {
    	activeSlide.className = "move-right";
    },500);

    newSelected = heroListItems.find((item,index) => index == selectedPos);
    newSelected.className = "selected moving show";
      setTimeout(function () {
    	//remove class is-moving once transition ended
    	newSelected.className = "selected";
    },500);

    for(i = selectedPos+1; i < heroListItems.length; i++) {
    	heroListItems[i].className = "move-right";
    }
}

function updateSliderNav(selectedPos){
    console.log(selectedPos);
    for(i = 0; i < navListItems.length; i++){
        if(navListItems[i].className == "slider-selected"){
            navListItems[i].className = "";
            console.log(i);
        }
        if(i == selectedPos){
            navListItems[i].className = "slider-selected";
            console.log(i);
        }
    }
}

