document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const loadMoreBtn = document.getElementById('loadMore');
    let loadedCount = 0; // Изначально загружаем три карточки
    const cardsPerPage = 6;
    let sectionsFromXML = []; // Массив для хранения данных из XML

    loadXMLDoc('xml/second_page.xml'); // Загружаем XML при загрузке страницы

    loadMoreBtn.addEventListener('click', function() {
        loadNextCardsFromXML();
    });

    function loadNextCardsFromXML() {
        // Добавляем следующие карточки из массива данных из XML в галерею
        for (let i = loadedCount; i < loadedCount + cardsPerPage && i < sectionsFromXML.length; i++) {
            const sectionData = sectionsFromXML[i];
            const section = document.createElement('section');
            section.innerHTML = `
                <img src="${sectionData.image}" alt="${sectionData.name}">
                <div class="description">
                    <p class="name_moto">${sectionData.name}</p>
                    <p class="price_moto">${sectionData.price}</p>
                    <p class="description_moto">${sectionData.description}</p>
                </div>
            `;
            gallery.appendChild(section);
        }
        loadedCount += cardsPerPage;
        if (loadedCount >= sectionsFromXML.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    function loadXMLDoc(filename) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const xmlDoc = this.responseXML;
                sectionsFromXML = []; // Очищаем массив перед добавлением новых данных
                const sections = xmlDoc.querySelectorAll('section');
                sections.forEach(section => {
                    const image = section.querySelector('image').textContent;
                    const name = section.querySelector('name').textContent;
                    const price = section.querySelector('price').textContent;
                    const description = section.querySelector('description').textContent;
                    sectionsFromXML.push({ image, name, price, description }); // Сохраняем данные из XML в массив
                });
                loadNextCardsFromXML(); // Показываем первые три карточки после загрузки XML
            }
        };
        xhttp.open('GET', filename, true);
        xhttp.send();
    }
});

const modal = document.getElementById('Modal1');
const closeBtn1 = document.querySelector('.button_close1');
const closeBtn2 = document.querySelector('.button_close2');
const openBtn1 = document.getElementById('Btn1');
const openBtn2 = document.getElementById('Btn2');
const modal2 = document.getElementById("Modal2")
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
openBtn2.onclick = function() {
    openModal(modal2);
}
closeBtn1.onclick = function() {
    closeModal(modal);
}
closeBtn2.onclick = function() {
    closeModal(modal2);
}
page.onclick = function(event) {
    if (!event.target.closest('.content') && !event.target.matches('#Btn1') && !event.target.matches('#Btn2')) {
        closeModal(modal);
        closeModal(modal2);
    }
}


