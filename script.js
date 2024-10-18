let menu = document.getElementById("menu-icon");
let list = document.querySelector(".AllList");

menu.addEventListener('click', ()=>
    {
        menu.classList.toggle('bx-x');
        list.classList.toggle('open');
    }
);