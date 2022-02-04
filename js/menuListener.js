const openMenuTable = document.getElementById('first_menu');
const menuTable = document.getElementById('menu-table');

openMenuTable.addEventListener('click', function(e) {
    e.preventDefault();
    menuTable.classList.add('active')
});

const openMenuBase = document.getElementById('second-menu');
const menuBase = document.getElementById('menu-base');

openMenuBase.addEventListener('click', function(e) {
    e.preventDefault();
    menuBase.classList.add('active')
});

const openMenuObj = document.getElementById('third-menu');
const menuObj = document.getElementById('menu-obj');

openMenuObj.addEventListener('click', function(e) {
    e.preventDefault();
    menuObj.classList.add('active')
});
