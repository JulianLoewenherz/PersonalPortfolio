var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tabContents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("activeTab");
}

document.addEventListener("DOMContentLoaded", function() {
    const preTags = document.querySelectorAll('#introText pre');
    const headers = document.querySelectorAll('#introText h3');

    preTags.forEach((pre, index) => {
        pre.addEventListener('mouseover', () => {
            headers[index].classList.add('highlighted');
        });
        pre.addEventListener('mouseout', () => {
            headers[index].classList.remove('highlighted');
        });
    });

    // Tooltip functionality
    var introText = document.getElementById("introText");
    var tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    var isMobile = window.innerWidth <= 480;
    tooltip.innerText = isMobile ? "Click on the text" : "Hover over the text";

    document.body.appendChild(tooltip); 

    // Initial tooltip display
    tooltip.style.left = introText.offsetLeft + 10 + "px";
    tooltip.style.top = introText.offsetTop + 10 + "px";
    tooltip.style.display = "block";

    setTimeout(function() {
        tooltip.style.display = "none";
    }, 3000); 

    // Handle mouse events for desktop
    introText.addEventListener("mousemove", function (e) {
        if (!isMobile) {
            tooltip.style.display = "none";
        }
    });

    introText.addEventListener("mouseover", function () {
        if (!isMobile) {
            tooltip.style.display = "none";
        }
    });

    introText.addEventListener("mouseout", function () {
        if (!isMobile) {
            tooltip.style.display = "none";
        }
    });

    // Handle touch events for mobile
    function handleTouchStart(e) {
        if (isMobile) {
            tooltip.innerText = "Click on the text";
            tooltip.style.left = e.touches[0].pageX + 10 + "px";
            tooltip.style.top = e.touches[0].pageY + 10 + "px";
            tooltip.style.display = "block";
            setTimeout(function() {
                tooltip.style.display = "none";
            }, 3000); 

            introText.removeEventListener("touchstart", handleTouchStart);
        }
    }

    introText.addEventListener("touchstart", handleTouchStart);
});

// Existing background change functionality
const button1 = document.querySelector("#button1");
button1.onclick = changeBackground;

function changeBackground(){
    var currentBG = document.getElementById('cityimage');
    if(currentBG.src === 'https://wallpapercave.com/wp/wp4183789.jpg'){
        //change to seattle
        currentBG.src = 'https://muralsyourway.vtexassets.com/arquivos/ids/234511/Seattle-Skyline-Panoramic-Mural-Wallpaper.jpg?v=638164625801070000';
    }
    else{ //must be seattle image so change back to vancouver image
        currentBG.src = 'https://wallpapercave.com/wp/wp4183789.jpg'
    }
}
