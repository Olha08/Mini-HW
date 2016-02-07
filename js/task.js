function switchSubmenu(){

    var submenu = document.getElementById('submenu-1');

    if (submenu.style.display == 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }

    return;
}

function openSubmenu2(el){

    document.getElementById(el).style.display = 'block';

    return;
}

function hideSubmenu2(el){

    document.getElementById(el).style.display = 'none';

    return;
}

function closeModal(){

    var modal = document.getElementsByClassName("modal");
    var overlay = document.getElementsByClassName("overlay");

    modal[0].style.display = "none";
    overlay[0].style.display = "none";

    return;
}


function showModal(){

    var modal = document.getElementsByClassName("modal");
    var overlay = document.getElementsByClassName("overlay");

    modal[0].style.display = "block";
    overlay[0].style.display = "block";

    return;
}