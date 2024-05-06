const html = document.getElementsByTagName("html")[0];
const points_menu = document.getElementsByClassName("points_menu");
document.addEventListener('DOMContentLoaded', function() {

    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var pointsMenu = document.querySelector('.points_menu');
    var points = document.getElementsByClassName("points_menu open");
    
    hamburgerMenu.addEventListener('click', function() {
        if (pointsMenu.classList.contains('open')) {
            html.classList.remove("noscroll");
            points[0].style.right = "-100%";
            hamburgerMenu.classList.remove('open')
            pointsMenu.classList.remove('open');
        } else {
            html.classList.add("noscroll");
            hamburgerMenu.classList.add('open')
            pointsMenu.classList.add('open');
        }
    });

    function openModalAndCloseMenu(modalElement) {
        if (pointsMenu.classList.contains('open')) {
            html.classList.remove("noscroll");
            points[0].style.right = "-100%";
            hamburgerMenu.classList.remove('open');
            pointsMenu.classList.remove('open');
        }
        
        modalElement.style.display = "block";
        html.classList.add("noscroll");
    }

    openBtn1.onclick = function() {
        openModalAndCloseMenu(modal);
    }
    
    
});
