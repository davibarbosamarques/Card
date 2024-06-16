'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    var className = document.body.className;
    if (className === "light-theme") {
        this.innerHTML = `<i class="bi bi-toggle-off"></i>`;
    } else {
        this.innerHTML = `<i class="bi bi-toggle-on"></i>`;
    }

    console.log('nome da classe atual: ' + className);
});
