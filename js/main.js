 // Add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach(item => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

 // Menu toggle
let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

menuToggle.onclick = function() {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};


// Selecciona todos los elementos <li> del menú de navegación
let list1 = document.querySelectorAll(".navigation li");

// Función para agregar la clase 'hovered' al hacer clic
function activeLink() {
    // Elimina la clase 'hovered' de todos los elementos
    list.forEach(item => {
        item.classList.remove("hovered");
    });
    // Agrega la clase 'hovered' al elemento que fue clicado
    this.classList.add("hovered");
}

// Agrega un evento 'click' a cada <li> que activará la función 'activeLink'
list.forEach(item => item.addEventListener("click", activeLink));


// Agrega un evento 'mouseover' a cada <li> que activará la función 'activeLink' para darle un efecto de hover

list.forEach(item => item.addEventListener("mouseover", activeLink));

// Agrega un evento 'mouseout' a cada <li> que eliminará la clase 'hovered' para volver al estado original

list.forEach(item => item.addEventListener("mouseout", function() {
    item.classList.remove("hovered");
}));







