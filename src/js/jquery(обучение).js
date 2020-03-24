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

    //Анимации

    //$('h1').delay(1000).slideUp(1000).slideDown(1000);  // delay-задержка,   slideUp/Down - уплывание объекта 

    //Атрибуты  

    // $('img').click(function() {
    //     $(this).fadeOut(500, function() {
    //         $(this).attr('src', 'src/img/hero/hero-image.png').fadeIn(500)     // attr - через тег можно добавлять/изменять атрибуты элемента
    //     });
    // });

    //Взаимодействие с классами

    $('h1').click(function() {
        //$('h1').toggleClass('hero-text__title button');        //toggleClass - при клике убирает и убавляет класс приследующем клике,      если указать два класса через пробел в одних ковычках, будет менять с одного класса на другой при клике
        // addClass - присваивает класс выбранному элементу
        //$(this).text('Sala aleykum bratya');        // .text('') - заменяет текст внутри элемента на свой 
        //$(this).html('Prischi ne davi<br>pls');        //.html('') - позволяет писать текст и теги 
        //$(this).append(' Текст дополнительный');         //.append('') - добавляет текст в конце элемента
        //$(this).prepend(' Текст дополнительный');         //.append('') - добавляет текст в начале элемента
        //$(this).after('<button class="button">BUY</button>')        //.after('') - добавляет новый элемент после элемента
        //$(this).wrap('<div class="container"></div>')        //.wrap('') - ОБОРАЧИВАЕТ элемент в указанный новый элемент
        //$(this).unwrap('<div class="hero-text"></div>');        //.unwrap('') - УБИРАЕТ указанную ОБЁРТКУ элемента
        //$(this).empty('')       //.empty - обнуляет элемент
        //$(this).remove('')       //.empty - УДАЛЯЕТ элемент
        $(this).append('<br/>'+$(this).text());      // в конце элемента скопирован текст элемента
    });       
});