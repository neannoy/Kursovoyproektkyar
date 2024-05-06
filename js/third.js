const modal = document.getElementById('Modal1');
const closeBtn1 = document.querySelector('.button_close1');
const openBtn1 = document.getElementById('Btn1');
const modalContent = document.querySelector('.content');
const page = document.querySelector("main");

function openModal(modalElement) {
    modalElement.style.display = "block";
    document.getElementsByTagName("html")[0].classList.add("noscroll");

}
function closeModal(modalElement) {
    modalElement.style.display = "none";
    document.getElementsByTagName("html")[0].classList.remove("noscroll");
}

openBtn1.onclick = function() {
    openModal(modal);
}
closeBtn1.onclick = function() {
    closeModal(modal);
}

page.onclick = function(event) {
    if (!event.target.closest('.content') && !event.target.matches('#Btn1')) {
        closeModal(modal);
    }
}

