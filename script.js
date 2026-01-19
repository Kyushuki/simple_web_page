let count = 0;
function Menu(name){
    let elem = document.getElementsByClassName(name)[0];
    if (count == 0 && elem){
        elem.style.display = 'block';
        document.getElementById("menu").src = 'images/menuActive.svg'
        count+=1;
    } else if (count == 1 && elem) {
        elem.style.display = 'none';
        document.getElementById("menu").src = 'images/menu.svg'
        count=0;
    }
}