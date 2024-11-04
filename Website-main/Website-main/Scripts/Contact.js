var hover = document.getElementsByClassName('Hovers');

if(localStorage.getItem('Appearance') == 'Dark'){
    for(var i = 0;i < hover.length;i++){
        hover[i].classList.add('hoverDark');
        hover[i].classList.remove('hover');
    }
}

else{
    for(var i = 0;i < hover.length;i++){
        hover[i].classList.add('hover');
        hover[i].classList.remove('hoverDark');
    }
}