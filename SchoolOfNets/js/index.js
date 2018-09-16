$(document).ready(function(){
    $('#titulo').html('Curso de jQuery');
    $('#desc').html('Começando com jQuery');
    
    $('h1').css('color','red');

    $('button').click(function(){
        $('body').hide();
    });
});