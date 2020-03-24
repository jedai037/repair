$(function() {
    let button = $('#button');
    let modal = $('#modal');
    let close = $('#close');
    let arr = $('#arr');

    button.on('click', function() {
        modal.addClass('modal_active');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    });

    arr.on('click', function() {
        $('html, body').animate({scrollTop: $('html, body').offset().top}, 1000);
    });
});