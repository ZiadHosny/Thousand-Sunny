$('.buttonnext').click(function () {
    //$(this).parent().find('.button').addClass('off');
    $(this).addClass('nextpressed');
    $('.buttonprev').removeClass('prevpressed');
    $('.g5_images-next').addClass('secondpicture');
    $('.g5_images-next').removeClass('firstpicture');
});
$('.buttonprev').click(function () {

    $(this).addClass('prevpressed');
    $('.buttonnext').removeClass('nextpressed');
    $('.g5_images-next').addClass('firstpicture');
    $('.g5_images-next').removeClass('secondpicture');
});