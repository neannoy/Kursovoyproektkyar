const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots');

let counter = 0;

prevBtn.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = slider.children.length-1;
  }
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  counter++;
  if (counter === slider.children.length) {
    counter = 0;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${counter * 100}%)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === counter) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

for (let i = 0; i < slider.children.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
}

updateDots();


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

