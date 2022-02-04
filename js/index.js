function openbox(id) {
    let all = document.querySelectorAll('.main__menu');
    for (let i = 0; i< all.length; i++) {
        if (all[i].id == id) {
            all[i].style.display = (all[i].style.display == 'none') ? 'flex' : 'none';
        }else {
            all[i].style.display = 'none';
        }
    }
};

function addEventListeners() {
    // const openNavBarTable = document.getElementById('first-menu');
    // const menuNavBarTable = document.getElementById('menu-table');
    // const openNavBarBase = document.getElementById('second-menu');
    // const menuNavBarBase = document.getElementById('menu-base');
    // const openNavBarObj = document.getElementById('third-menu');
    // const menuNavBarObj = document.getElementById('menu-obj');
    // const openNavBarChange = document.getElementById('fourth-menu');
    // const menuNavBarChange = document.getElementById('menu-change');

    const openMenuTableAjax2016 = document.getElementById('table-ajax_2016');
    const menuAjax2016 = document.getElementById('menu-table-ajax_2016');
    const openMenuTableAjax2017 = document.getElementById('table-ajax_2017');
    const menuAjax2017 = document.getElementById('menu-table-ajax_2017');
    const openMenuTableAjax2018 = document.getElementById('table-ajax_2018');
    const menuAjax2018 = document.getElementById('menu-table-ajax_2018');
    const openMenuTableAjax2019 = document.getElementById('table-ajax_2019');
    const menuAjax2019 = document.getElementById('menu-table-ajax_2019');
    const openMenuTableAjax2020 = document.getElementById('table-ajax_2020');
    const menuAjax2020 = document.getElementById('menu-table-ajax_2020');
    const openMenuTableAjax2021 = document.getElementById('table-ajax_2021');
    const menuAjax2021 = document.getElementById('menu-table-ajax_2021');
    const openMenuTableAjax2022 = document.getElementById('table-ajax_2022');
    const menuAjax2022 = document.getElementById('menu-table-ajax_2022');

    const openMenuAddAjax = document.getElementById('base-ajax_add');
    const menuAddAjax = document.getElementById('menu-base-ajax_add');
    const openMenuCreateAjax = document.getElementById('base-ajax_create');
    const menuCreateAjax = document.getElementById('menu-base-ajax_create');
    const openMenuComprAjax = document.getElementById('base-ajax_compr');
    const menuComprAjax = document.getElementById('menu-base-ajax_compr');
    const openMenuVacAjax = document.getElementById('base-ajax_vac');
    const menuVacAjax = document.getElementById('menu-base-ajax_vac');
    const openMenuKgsAjax = document.getElementById('base-ajax_kgs');
    const menuKgsAjax = document.getElementById('menu-base-ajax_kgs');

    const openMenuFormAjax2016 = document.getElementById('obj-ajax_2016');
    const menuNumAjax2016 = document.getElementById('menu-obj-ajax_2016');
    const openMenuFormAjax2017 = document.getElementById('obj-ajax_2017');
    const menuNumAjax2017 = document.getElementById('menu-obj-ajax_2017');
    const openMenuFormAjax2018 = document.getElementById('obj-ajax_2018');
    const menuNumAjax2018 = document.getElementById('menu-obj-ajax_2018');
    const openMenuFormAjax2019 = document.getElementById('obj-ajax_2019');
    const menuNumAjax2019 = document.getElementById('menu-obj-ajax_2019');
    const openMenuFormAjax2020 = document.getElementById('obj-ajax_2020');
    const menuNumAjax2020 = document.getElementById('menu-obj-ajax_2020');
    const openMenuFormAjax2021 = document.getElementById('obj-ajax_2021');
    const menuNumAjax2021 = document.getElementById('menu-obj-ajax_2021');
    const openMenuFormAjax2022 = document.getElementById('obj-ajax_2022');
    const menuNumAjax2022 = document.getElementById('menu-obj-ajax_2022'); 


    // openNavBarTable.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     menuNavBarTable.classList.toggle("main__menu")
    // });
    
    // openNavBarBase.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     menuNavBarBase.classList.toggle("main__menu")
    // });

    // openNavBarObj.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     menuNavBarObj.classList.toggle("main__menu")
    // });

    // openNavBarChange.addEventListener('click', function(e) {
    //     e.preventDefault();
    //     menuNavBarChange.classList.toggle("main__menu")
    // });

    
    openMenuTableAjax2016.addEventListener('click', function(e) {
        e.preventDefault();
        menuAjax2016.classList.toggle("main__menu__table")
    });
    
    openMenuTableAjax2017.addEventListener('click', function(e) {
        e.preventDefault();
        menuAjax2017.classList.toggle("main__menu__table")
    });

    openMenuTableAjax2018.addEventListener('click', function(e) {
        e.preventDefault();
        menuAjax2018.classList.toggle("main__menu__table")
    });

    openMenuTableAjax2019.addEventListener('click', function(e) {
        e.preventDefault();
        menuAjax2019.classList.toggle("main__menu__table")
    });

    openMenuTableAjax2020.addEventListener('click', function(e) {
        e.preventDefault();
        menuAjax2020.classList.toggle("main__menu__table")
    });

    openMenuTableAjax2021.addEventListener('click', function(e) {
        e.preventDefault();
        menuAjax2021.classList.toggle("main__menu__table")
    });

    openMenuTableAjax2022.addEventListener('click', function(e) {
        e.preventDefault();
        menuAjax2022.classList.toggle("main__menu__table")
    });


    openMenuAddAjax.addEventListener('click', function(e) {
        e.preventDefault();
        menuAddAjax.classList.toggle("main__menu__base")
    });
    
    openMenuCreateAjax.addEventListener('click', function(e) {
        e.preventDefault();
        menuCreateAjax.classList.toggle("main__menu__base")
    });

    openMenuComprAjax.addEventListener('click', function(e) {
        e.preventDefault();
        menuComprAjax.classList.toggle("main__menu__base")
    });

    openMenuVacAjax.addEventListener('click', function(e) {
        e.preventDefault();
        menuVacAjax.classList.toggle("main__menu__base")
    });

    openMenuKgsAjax.addEventListener('click', function(e) {
        e.preventDefault();
        menuKgsAjax.classList.toggle("main__menu__base")
    });


    openMenuFormAjax2016.addEventListener('click', function(e) {
        e.preventDefault();
        menuNumAjax2016.classList.toggle("main__menu__obj")
    });
    
    openMenuFormAjax2017.addEventListener('click', function(e) {
        e.preventDefault();
        menuNumAjax2017.classList.toggle("main__menu__obj")
    });

    openMenuFormAjax2018.addEventListener('click', function(e) {
        e.preventDefault();
        menuNumAjax2018.classList.toggle("main__menu__obj")
    });

    openMenuFormAjax2019.addEventListener('click', function(e) {
        e.preventDefault();
        menuNumAjax2019.classList.toggle("main__menu__obj")
    });

    openMenuFormAjax2020.addEventListener('click', function(e) {
        e.preventDefault();
        menuNumAjax2020.classList.toggle("main__menu__obj")
    });

    openMenuFormAjax2021.addEventListener('click', function(e) {
        e.preventDefault();
        menuNumAjax2021.classList.toggle("main__menu__obj")
    });

    openMenuFormAjax2022.addEventListener('click', function(e) {
        e.preventDefault();
        menuNumAjax2022.classList.toggle("main__menu__obj")
    });


};
addEventListeners();

function show(value) {
    document.querySelector(".text-box").value = value;
  }
  
  let dropdown = document.querySelector(".dropdown")
  dropdown.onclick = function() {
      dropdown.classList.toggle("active")
};

document.querySelector('.c-hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    if(this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.body.classList.remove('body-active');
    }else{
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.body.classList.add('body-active');
    }
})
