let hoveringIn = function(){ 
    let elemento = $(this);
    elemento.addClass('hovering');
    elemento.find('.remover').css('display','block'); 
}

let hoveringOut = function(){ 
    let elemento = $(this)
    elemento.removeClass('hovering'); 
    elemento.find('.remover').css('display','none');
}

let aposInicializacao = function(){
    let principal = $('.principal');
    principal.find('tbody tr').hover(hoveringIn, hoveringOut);
}

$(aposInicializacao);