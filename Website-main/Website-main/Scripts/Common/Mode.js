var navbar = document.getElementById('navvbar');
var main = document.getElementsByClassName('element');
var ulElement = document.getElementsByClassName('navHover');
var yo = document.getElementById("yoyo");
function dark(){
    document.body.style.backgroundColor = "#23232b";
    document.body.style.color = "white";
    var object = document.getElementById('dark');
    dark.backgroundColor = "#0e122b";
    dark.color = "white";
    for(var i = 0;i < main.length;i++){
        main[i].style.color ="white";
    }
    // Saving the Preferred Mode Of the User
    localStorage.setItem('Appearance',"Dark");
    console.log('Dark');

    //Changing the lettering in the NavBar
    navbar.classList.add('dark');
    navbar.classList.remove('light');
    //Changing navbar hovers
    for(var i = 0;i < ulElement.length;i++){
        ulElement[i].classList.add('navHoverDark');
    }
}
function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#23232b"; 
    console.log("yes");
    localStorage.setItem('Appearance',"Light");
    console.log('Light');
    
    for(var i = 0;i < main.length;i++){
        main[i].style.color ="black";
    }

    navbar.classList.remove('Dark');
    navbar.classList.add("Light");

    for(var i = 0;i < ulElement.length;i++){
        ulElement[i].classList.add('navHover');
    }
}

var mode = localStorage.getItem('Appearance');

if (mode === "Light"){
    light()
}
else{
    dark()
}

 