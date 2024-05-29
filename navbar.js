let drop_down_menu = document.getElementsByClassName('drop-down-navbar-div')[0];
drop_down_menu.style.top = '-200px';
function drop_down_the_menu(){
    if(drop_down_menu.style.top=='-200px') drop_down_menu.style.top = '100px';
    else drop_down_menu.style.top = '-200px';
}

