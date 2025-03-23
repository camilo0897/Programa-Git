document.addEventListener('DOMContentLoaded', () => {
    // Elementos del menú
    const menuItems = document.querySelectorAll('.menu li');
    const saveButton = document.querySelector('.save-btn');
    const form = document.querySelector('form');
    const formSaveButton = document.querySelector('.form-save-btn');
    
    
    // Función para cambiar el contenido según el menú seleccionado
    const changeContent = (section) => {
        const mainContent = document.querySelector('.main-content');
        mainContent.innerHTML = `
            <div class="header">
                ${sections[section]}
                <button class="save-btn">Guardar</button>
            </div>
        `;
    };

    // Manejo de clics en los elementos del menú
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            menuItems.forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            
            const selectedSection = e.target.innerText.toLowerCase().replace(/ /g, '');
            if (sections[selectedSection]) {
                changeContent(selectedSection);
            }
        });
    });

    // Función para simular guardado de formulario
    formSaveButton.addEventListener('click', (e) => {
        e.preventDefault();
        const orgName = document.querySelector('#org-name').value;
        const domainName = document.querySelector('#domain-name').value;
        
        if (orgName && domainName) {
            alert(`Datos guardados:\nOrganización: ${orgName}\nDominio: ${domainName}`);
        } else {
            alert('Por favor completa todos los campos.');
        }
    });

    // Función para guardar cambios al presionar el botón "Guardar"
    saveButton.addEventListener('click', () => {
        alert('Cambios guardados exitosamente.');
    });
});
