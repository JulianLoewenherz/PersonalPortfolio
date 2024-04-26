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


// making the background change on click on the contact page
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

