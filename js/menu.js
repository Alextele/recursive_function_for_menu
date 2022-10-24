document.addEventListener('DOMContentLoaded', function() {

    var main_ul = document.querySelector('ul');
    main_ul.classList.add('menu');
    main_ul.classList.add('main-menu');

    const   Ul_list = main_ul.querySelectorAll('ul'),
            First_li = main_ul.querySelector('li');

    for (let i = 0, length = Ul_list.length; i < length; i++) {
        Ul_list[i].classList.add('menu');
        Ul_list[i].classList.add('sub-menu');
        if (Ul_list[i].closest('li')!=null){
        Ul_list[i].closest('li').classList.add('has-submenu')};
    };

    const Li_list_has_submenu = First_li.querySelectorAll('.has-submenu');

    Ul_list[0].classList.remove('sub-menu');
    Ul_list[0].classList.add('mega-menu');
    Ul_list[0].classList.add('clearfix');
    Ul_list[0].classList.add('main-menu');

    for (let i = 0, length = Li_list_has_submenu.length; i < length; i++) {
        Li_list_has_submenu[i].classList.add('one-third');
    };







}, false);