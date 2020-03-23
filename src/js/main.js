const button = document.querySelector('#button');
const modal = document.querySelector('#modal');
const exit = document.querySelector('#close');

button.addEventListener('click', function() {
    modal.classList.add('modal_active');
    setTimeout(modalClose, 5000);
});

exit.addEventListener('click', function() {
    modalClose();
});

let modalClose = () => {
    modal.classList.remove('modal_active');
};

// $(document).ready(function() {
    //Скрипт выполнится после загрузки всего документа!
    //code
    //Более понятная версия написанного снизу
// });

$(function() {
    //code
    // $('li:eq(0)').css('border', '1px solid red');
    // $('a[href^="bla"]').css('border', '1px solid green'); //Выберет тэг <a>, начинающий в href="" с "bla"     знак ^ - начало
    // $('a[href$="ru"]').css('border', '1px solid green'); //Выберет тэг <a>, заканчивающий в href="" с "ru"      знак $ - конец
    // $('a[href*="r"]').css('border', '1px solid green'); //Выберет тэг <a>, СОДЕРЖАЩИЙ в href="" с "r"      знак * - где либо, неважно где содержится

    // toggleClass - добавление класса элементу(!!!)

    // click - один клик мышью, dblclick - двойнок клик мышью
    // $('h1').dblclick(function() {
    //     console.log('Sosiska');
    // })

    // *-------Эффект :hover через js-----*
    // $('h1').mouseenter(function() {      //Наведение курсора на объект
    //     $(this).css('color', 'blue');
    // });
    // $('h1').mouseleave(function() {     //Уведение курсора от объекта
    //     $(this).css('color', 'black');
    // });

    // *-----Введя в инпут имя, меняется приветствие с id="userName" на то, что ввёл пользователь-----*
    // $('input').change(function() {
    //     $('#userName').text(', ' + $(this).val());
    // });

    // $('input').keypress(function() {
    //     //нажатие на клавишу-keypress
    //     //keyup - работает когда последняя клавиша была нажата
    //     console.log();
    // };

    $('h1').hide(5000);
});